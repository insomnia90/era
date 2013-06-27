/**
  * Expose ModelResource
  */

module.exports = Authentication;

/**
  * Authentication mechanism for ModelResource
  */

function Authentication () {};

/**
  * Middleware for expressApp.
  * Will implement authentication mechanism.
  *
  * @param {Object} req
  * @param {Object} res
  * @param {Object} next
  * @api public
*/

Authentication.prototype.isAuthenticated = function(req, res, next) {
  next();
};
