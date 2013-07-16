/**
  * Expose Api
  */

module.exports = Api

/**
  * Initialize  a new `Api` with the given name and version. The `Api` url will
  * be in format of `/@name/@version`.
  * 
  * @param {String} name
  * @param {String} version
  */

function Api (name, version) {
  this.name = name;
  this.version = version;
  this.url = '/' + this.name + '/' + this.version + '/:resource';
  this.urlById = this.url + '/:id';
  this.resources = {};
}



/**
  * @param {Object} resource
  * @api private
  */

Api.prototype.addResource = function(resource) {
  this.resources[resource.name] = resource;
}

/**
  * @param {Object} resource
  * @api private
  */

Api.prototype.auth = function(resource) {
  return function(req, res, next) {
    resource.authentication.isAuthenticated(req, res, next);
  }
}

/**
  * @param {Object} resource
  * @api public
  */

Api.prototype.register = function(resource) {
  this.addResource(resource);
};

/**
  * @param {Object} expressApp
  * @api public
  */

Api.prototype.adapter = function(expressApp) {
  var self = this;

  expressApp.get(this.url, function(req, res) {
    var name = req.params.resource;
    var resource = self.resources[name];
    resource.get(req, res);
  });

  expressApp.post(this.url, function(req, res) {
    var name = req.params.resource;
    var resource = self.resources[name];
    resource.post(req, res);
  });

  expressApp.put(this.url, function(req, res) {
    var name = req.params.resource;
    var resource = self.resources[name];
    resource.put(req, res);
  });

  expressApp.delete(this.url, function(req, res) {
    var name = req.params.resource;
    var resource = self.resources[name];
    resource.delete(req, res);
  });
};