// 冒泡
function loop(array) {
  const a = [...array];
  const { length } = a;
  for (let i = 0; i < length; i++) {
    for (let y = 0; y < length - 1 - i; y++) {
      if (a[y] > a[y + 1]) {
        [a[y], a[y + 1]] = [a[y + 1], a[y]];
      }
    }
  }
}

//选择
function choose(array) {
  const a = [...array];
  const { length } = a;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let y = i + 1; y < length; y++) {
      if (a[min] > a[y]) {
        min = y;
      }
    }
    [a[min], a[i]] = [a[i], a[min]];
  }
  return a;
}

// 插入
function insert(array) {
  const a = [...array];
  const { length } = a;
  for (let i = 1; i < length; i++) {
    let j = i;
    let min = a[i];
    while (j > 0 && a[j - 1] > min) {
      a[j] = a[j - 1];
      j--;
    }
    a[i] = min;
  }
}

// 归并
function mergeSort(array) {
  const a = [...array];
  const { length } = a;
  if (length <= 1) {
    return a;
  }
  const mid = ~~(length / 2);
  const left = a.slice(0, mid);
  const right = a.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
}

//二叉树
function Node(elem) {
  this.elem = elem;
  this.left = null;
  this.right = null;
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(elem) {
    if (!this.root) {
      this.root = new Node(elem);
      return;
    }
    this.insertNode(this.root, elem);
  }

  insertNode(node, elem) {
    if (elem < node.elem) {
      if (!node.left) {
        node.left = new Node(elem);
        return;
      }
      this.insertNode(node.left, elem);
    } else {
      if (!node.right) {
        node.right = new Node(elem);
        return;
      }
      this.insertNode(node.right, elem);
    }
  }

  inOrder(node = this.root, callback) {
    if (node) {
      const elem = node.elem;
      this.inOrder(node.left, callback);
      callback(elem);
      this.inOrder(node.right, callback);
    }
  }

  firstOrder(node = this.root, callback) {
    if (node) {
      const elem = node.elem;
      callback(elem);
      this.firstOrder(node.left, callback);
      this.firstOrder(node.right, callback);
    }
  }

  lastOrder(node = this.root, callback) {
    if (node) {
      const elem = node.elem;
      this.lastOrder(node.left, callback);
      this.lastOrder(node.right, callback);
      callback(elem);
    }
  }

  search(elem, node = this.root) {
    if (!node || !elem) {
      return null;
    }
    if (elem < node.elem) {
      return this.search(elem, node.left);
    } else if (elem > node.elem) {
      return this.search(elem, node.right);
    } else {
      return true;
    }
  }

  min() {
    let { root: node } = this;
    if (!node) {
      return null;
    }
    while (node && node.left) {
      node = node.left;
    }
    return node.elem;
  }

  max() {
    let { root: node } = this;
    if (!node) {
      return null;
    }
    while (node && node.right) {
      node = node.right;
    }
    return node.elem;
  }
}

// [1,2,6,5,3,7,8,9,10]
let a = [1, 2, 6, 5, 3, 7, 8, 9, 10];

function b(array = []) {
  let b = [...array];
  let max = null;
  let num = b.length - 1;
  for (let i = num; i > 0; i--) {
    max = i;
    for (let y = i - 1; y >= 0; y--) {
      if (b[max] < b[y]) {
        max = y;
      }
    }
    const c = b.splice(max).reverse();
    console.log(c);
    console.log(`in:${b}`);
    c.forEach(elem => {
      b.unshift(elem);
    });
    console.log(`out:${b}`);
  }
  return b;
}
