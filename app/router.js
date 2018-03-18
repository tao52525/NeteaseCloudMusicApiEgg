'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // common
  router.post('/album', controller.commons.album);
  router.post('/banner', controller.commons.banner);
  // artist
  router.post('/artist', controller.artist.artist); // 简介和热门歌曲
  router.post('/artist/album', controller.artist.artistAlbum); // 专辑
  router.post('/artist/desc', controller.artist.artistDesc); // 完整介绍
  router.post('/artist/mv', controller.artist.artistMv); // mv
};
