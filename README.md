# chai-oauth2orize-grant

[![Version](https://img.shields.io/npm/v/chai-oauth2orize-grant.svg?label=version)](https://www.npmjs.com/package/chai-oauth2orize-grant)
[![Build](https://img.shields.io/travis/jaredhanson/chai-oauth2orize-grant.svg)](https://travis-ci.org/jaredhanson/chai-oauth2orize-grant)
[![Quality](https://img.shields.io/codeclimate/github/jaredhanson/chai-oauth2orize-grant.svg?label=quality)](https://codeclimate.com/github/jaredhanson/chai-oauth2orize-grant)
[![Coverage](https://img.shields.io/coveralls/jaredhanson/chai-oauth2orize-grant.svg)](https://coveralls.io/r/jaredhanson/chai-oauth2orize-grant)
[![Dependencies](https://img.shields.io/david/jaredhanson/chai-oauth2orize-grant.svg)](https://david-dm.org/jaredhanson/chai-oauth2orize-grant)


Helpers for testing [OAuth2orize](https://github.com/jaredhanson/oauth2orize)
grants with the [Chai](http://chaijs.com/) assertion library.

## Install

    $ npm install chai-oauth2orize-grant

## Usage

#### Use Plugin

Use this plugin as you would all other Chai plugins:

```javascript
var chai = require('chai');

chai.use(require('chai-oauth2orize-grant'));
```

#### Implement Test Cases

Once used, the `chai.oauth2orize.grant` helper function will be available to set
up test cases for OAuth2orize grants.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/chai-oauth2orize-grant'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/chai-oauth2orize-grant.svg' />
</a>
