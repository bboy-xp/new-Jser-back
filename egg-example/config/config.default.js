'use strict';

module.exports = appInfo => {
  const config = exports = {};
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526985936005_3317';

  // add your config here
  config.middleware = [];

  exports.mongoose = {
    url: 'mongodb://127.0.0.1/HookKingdata',
    options: {}
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};

