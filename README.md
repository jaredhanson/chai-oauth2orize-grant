# chai-oauth2orize-grant

[![Build](https://travis-ci.org/jaredhanson/chai-oauth2orize-grant.png)](https://travis-ci.org/jaredhanson/chai-oauth2orize-grant)
[![Coverage](https://coveralls.io/repos/jaredhanson/chai-oauth2orize-grant/badge.png)](https://coveralls.io/r/jaredhanson/chai-oauth2orize-grant)
[![Quality](https://codeclimate.com/github/jaredhanson/chai-oauth2orize-grant.png)](https://codeclimate.com/github/jaredhanson/chai-oauth2orize-grant)
[![Dependencies](https://david-dm.org/jaredhanson/chai-oauth2orize-grant.png)](https://david-dm.org/jaredhanson/chai-oauth2orize-grant)


Helpers for testing [OAuth2orize](https://github.com/jaredhanson/oauth2orize)
grants with the [Chai](http://chaijs.com/) assertion library.

## Install

    $ npm install chai-oauth2orize-grant

## Usage

#### Use Plugin

Use this plugin as you would all other Chai plugins:

```javascript
var chai = require('chai')
  , grant = require('chai-oauth2orize-grant');

chai.use(grant);
```

#### Write Test Cases

Once used, the `chai.grant` helper function will be available to set up test
cases for OAuth2orize grants.

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
