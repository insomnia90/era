
module.exports = Authentication;

function Authentication () {};
Authentication.prototype.isAuthenticated = function(req, res, next) {
  next();
};
