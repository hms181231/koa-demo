const AddTable = require('../../mongodb/getTable.js');

module.exports = async ctx => {
  const { body } = ctx.request;

  data = await AddTable.find(body);

  if (!data.length) {
    new AddTable(body).save();
    ctx.body = {
      status: 200,
      data,
      message: 'ok'
    };
  } else {
    ctx.body = {
      status: 500,
      data,
      message: '有数据了'
    };
  }
};
