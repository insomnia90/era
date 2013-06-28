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
  this.url = '/' + this.name + '/' + this.version;
  this.resources = {};
}


/**
  * @param {Object} resource
  * @return {Object}
  * @api private
  */

Api.prototype.makeUrl = function(resource) {
  var url = {};
  url.base = this.url + resource.simpleUrl;
  url.param = this.url + resource.paramUrl;
  return url;
};

/**
  * @param {Object} resource
  * @api private
  */

Api.prototype.addResource = function(resource) {
  var name = resource.name;
  this.resources[name] = resource;
  this.resources[name].url = this.makeUrl(resource);
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
  for (var name in this.resources) {
    resource = this.resources[name];

    // auth for resource
    expressApp.get(resource.url.base, this.auth(resource));
    expressApp.get(resource.url.param, this.auth(resource));

    expressApp.get(resource.url.base, function(req, res) {
      resource.get(req, res);
    });
    expressApp.get(resource.url.param, function(req, res) {
      resource.get(req, res);
    });
    expressApp.post(resource.url.base, function(req, res) {
      resource.post(req, res);
    });
    expressApp.put(resource.url.base, function(req, res) {
      resource.put(req, res);
    });
    expressApp.delete(resource.url.base, function(req, res) {
      resource.delete(req, res);
    });
  }
};