'use strict';

/**
 * common-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::common-post.common-post');
