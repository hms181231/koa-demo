const Login = require('../../mongodb/login.js');

module.exports = async ctx => {
  const data = ctx.request.body;
  const logins = await Login.findOne({ user: data.user });
  if (!logins || logins.password !== data.password) {
    ctx.body = {
      status: 500,
      data: null,
      message: '用户名或密码不正确'
    };
  } else {
    ctx.body = {
      status: 200,
      data: null,
      message: '登录成功'
    };
  }
};
