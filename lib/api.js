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
  var name = resource._meta.name;
  this.resource[name] = resource;
  this.resource[name].url = this.makeUrl(resource);
}

/**
  * @param {Object} resource
  * @api private
  */

Api.prototype.auth = function(resource) {
  return resources.authentication.isAuthenticated;
}

/**
  * @param {Object} resource
  * @api public
  */

APi.prototype.register = function(resource) {
  this.addResource(resource);
};

/**
  * @param {Object} expressApp
  * @api public
  */

APi.prototype.adapter = function(expressApp) {
  for (var name in this.resource) {
    res = this.resource[name];

    // auth for resource
    expressApp.get(res.url.base, this.auth(res));
    expressApp.get(res.url.param, this.auth(res));

    expressApp.get(res.url.base, function(req, res) {
      res.get(req, res);
    });
    expressApp.get(res.url.param, function(req, res) {
      res.get(req, res);
    });
    expressApp.post(res.url.base, function(req, res) {
      res.post(req, res);
    });
    expressApp.put(res.url.base, function(req, res) {
      res.put(req, res);
    });
    expressApp.delete(res.url.base, function(req, res) {
      res.delete(req, res);
    });
  }
};