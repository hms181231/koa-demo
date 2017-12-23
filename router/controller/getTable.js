const GetTable = require('../../mongodb/getTable.js');

module.exports = async ctx => {
  const { query } = ctx.request;
  let data = [];
  if (query.name) {
    data = await GetTable.find(query);
  } else {
    data = await GetTable.find({});
  }

  if (data.length) {
    ctx.body = {
      status: 200,
      data,
      message: 'ok'
    };
  } else {
    ctx.body = {
      status: 500,
      data,
      message: '暂无数据'
    };
  }
};
