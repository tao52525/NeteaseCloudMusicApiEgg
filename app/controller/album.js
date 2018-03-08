'use strict';

const Controller = require('egg').Controller;

class AlbumController extends Controller {
  async detail() {
    const { ctx, service } = this;
    let req = ctx.request.body;
    let cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    let options = {
      host: 'music.163.com',
      path: `/weapi/v1/album/${req.id}`,
      method: 'POST',
      data: {
        csrf_token: '',
      },
      cookie: cookie
    }
    const result = await service.netease.httpFetch(options);
    ctx.body = result;
  }
}

module.exports = AlbumController;
