'use strict';
const Controller = require('egg').Controller;

class CommonsController extends Controller {
  async album() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    const options = {
      host: 'music.163.com',
      path: `/weapi/v1/album/${req.id}`,
      method: 'POST',
      data: {
        csrf_token: '',
      },
      cookie,
    };
    const result = await service.netease.httpFetch(options);
    ctx.body = result;
  }

  async banner() {
    const { ctx, service } = this;
    const cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    const options = {
      host: 'music.163.com',
      path: '/weapi/v2/banner/get',
      method: 'POST',
      data: {
        timeStamp: 0 + new Date(),
        csrf_token: '',
      },
      cookie,
    };
    const result = await service.netease.httpFetch(options);
    ctx.body = result;
  }
}

module.exports = CommonsController;
