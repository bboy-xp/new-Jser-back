'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/postData', controller.home.postData);
  router.post('/postUsermsg', controller.home.postUsermsg);
  router.post('/postTableData',controller.home.postTableData);
};
