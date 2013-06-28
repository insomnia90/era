era
=========

REST adapter for [express](http://expressjs.com).

## Installation

    $ npm install -g era

## About

  This package is intended for fast development of REST APIs.

## Quick start
    
```js
var era = require('era');

var Api = era.Api;
var Authentication = era.Authentication;
var ModelResource = era.ModelResource;
```

  Declare a new resource
    
```js
function UserResource (model, authentication) {
  ModelResource.call(this, model, authentication);
}
util.inherits(UserResource, ModelResource);
```
    
  and a new api

```js
var api = new Api('api', 'v1');
```

  and register your new resource:
  
```js
api.register(new UserResource(models.User, Authentication));
```

  Now, for this resource you have working CRUD functionality and the urls `/api/v1/user` and `/api/v1/user/:id` are auto generated. The urls are base on the resource name, so the name has two parts, the model name, in our case is `User` and the word `Resource`, which is a mandatory word.
  If you want to change behavior of the resource you have to override `get`, `post`, `put` and `delete` methods.
  
## Routing with express
  The api object is the one we built before.

```js
var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.compress());
app.use(express.bodyParser());
app.use(app.router);

api.adapter(app);
```

## Authentication

`Authentication` have no rules so you'll have to extend it and implement `isAuthenticated` for settings your own rules.

Here is an example:
```js
function ApiKeyAuth() {
  Authentication.call(this);
};
util.inherits(ApiKeyAuth, Authentication);
ApiKeyAuth.prototype.isAuthenticated = function (req, res, next) {
  var apikey = req.query.apikey;
  if (apikey) {
    models.User.findOne({'apikey': apikey}).exec(function(err, obj) {
      if (obj) {
        next();
      }
      else {
        res.send(401);
      }
    });
  }
  else {
    res.send(401);
  }
}
```

## Model

The default CRUD behavior of the resource is built on top of [mongoose](http://http://mongoosejs.com/). If you use something else you have to implement your own `get`, `post`, `put` and `delete`.


## Working with express
Everything you'll extend with [era]() is a middleware for [express](http://expressjs.com).


License
-

MIT

