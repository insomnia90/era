era
=========

REST adapter for express.

## Installation

    $ npm install -g era

## Quick start
    
```js
var era = require('era');

var Api = era.Api;
var Authentication = era.Authentication;
var ModelResource = era.ModelResource;
```

  Create a new resource
    
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
  If you want to change behavior of the resource you have to override get, post, put and delete methods.

  
## Working with express
The api object is the one we built before.

```js
var express = require('express');
var app = express();


// Middlewear
app.use(express.logger());
app.use(express.compress());
app.use(express.bodyParser());
app.use(app.router);

api.adapter(app);
```


License
-

MIT

