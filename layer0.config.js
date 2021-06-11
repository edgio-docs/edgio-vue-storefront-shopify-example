'use strict'

// This file was automatically added by layer0 deploy.
// You should commit this file to source control.

module.exports = {
  connector: '@layer0/vue-storefront',
  backends: {
    api: {
      domainOrIp: 'api.commercetools.com',
      hostHeader: 'api.commercetools.com',
    },
  },
  includeNodeModules: true,
  includeFiles: {
    'middleware.config.js': true
  },
}
