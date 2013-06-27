/**
  * Expose ModelResource
  */

model.exports = ModelResource

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

  this.className = parent.constructor.name;
  this.name = this.className.replace('Resource', '').toLowerCase();
  this.simpleUrl = '/' + this.name;
  this.paramUrl = '/' + this.name + '/:id';
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
