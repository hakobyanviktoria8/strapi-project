'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.post.create(data, { files });
    } else {
      entity = await strapi.services.post.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  //don't working right

  // async create(ctx) {
  //   let entity;
  //   const user = ctx.state.user.id;
  //   if (ctx.is('multipart')) {
  //     const { data, files } = parseMultipartData(ctx);
  //     entity = await strapi.services.post.create({...data, user}, { files });
  //   } else {
  //     entity = await strapi.services.post.create({...ctx.request.body, user});
  //   }
  //   return sanitizeEntity(entity, { model: strapi.models.post });
  // },
};
