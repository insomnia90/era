
function ModelResource (model, authentication) {
  this.model = model;
  this.authentication = authentication;

  this.className = parent.constructor.name;
  this.name = this.className.replace('Resource', '').toLowerCase();
  this.simpleUrl = '/' + this.name;
  this.paramUrl = '/' + this.name + '/:id';
}
ModelResource.prototype.get = function(req, res) {

};
ModelResource.prototype.post = function(req, res) {
};
ModelResource.prototype.put = function(req, res) {
};
ModelResource.prototype.delete = function(req, res) {
};
