/**
  * Expose ModelResource
  */

module.exports = ModelResource

/**
  * Initialize  a new `ModelResource` with a model and authentication.
  * 
  * @param {Object} model
  * @param {Object} authentication
  * @api public
  */

function ModelResource (model, authentication) {
  this.model = model;
  this.authentication = authentication;

  this.className = this.constructor.name;
  this.name = this.className.replace('Resource', '').toLowerCase();
}

/**
  * Middleware for expressApp
  *
  * @param {Object} req
  * @param {Object} res
  * @api public
*/

ModelResource.prototype.get = function(req, res) {};

/**
  * Middleware for expressApp
  *
  * @param {Object} req
  * @param {Object} res
  * @api public
*/

ModelResource.prototype.post = function(req, res) {};

/**
  * Middleware for expressApp
  *
  * @param {Object} req
  * @param {Object} res
  * @api public
*/

ModelResource.prototype.put = function(req, res) {};

/**
  * Middleware for expressApp
  *
  * @param {Object} req
  * @param {Object} res
  * @api public
*/

ModelResource.prototype.delete = function(req, res) {};
