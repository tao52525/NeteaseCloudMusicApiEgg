'use strict';
const Controller = require('egg').Controller;

class ArtistController extends Controller {
  async artistAlbum() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    const options = {
      host: 'music.163.com',
      path: `/weapi/artist/albums/${req.id}`,
      method: 'POST',
      data: {
        offset: req.offset || 0,
        total: true,
        limit: req.limit || 30,
        csrf_token: '',
      },
      cookie,
    };
    const result = await service.netease.httpFetch(options);
    ctx.body = result;
  }

  async artistDesc() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    const options = {
      host: 'music.163.com',
      path: '/weapi/artist/introduction',
      method: 'POST',
      data: {
        id: req.id,
        csrf_token: '',
      },
      cookie,
    };
    const result = await service.netease.httpFetch(options);
    ctx.body = result;
  }

  async artistMv() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    const options = {
      host: 'music.163.com',
      path: '/weapi/artist/mvs',
      method: 'POST',
      data: {
        artistId: req.id,
        total: true,
        offset: req.offset,
        limit: req.limit,
        csrf_token: '',
      },
      cookie,
    };
    const result = await service.netease.httpFetch(options);
    ctx.body = result;
  }

  async artist() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const cookie = ctx.request.get('Cookie') ? ctx.request.get('Cookie') : '';
    const options = {
      host: 'music.163.com',
      path: `/weapi/v1/artist/${req.id}`,
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

module.exports = ArtistController;
