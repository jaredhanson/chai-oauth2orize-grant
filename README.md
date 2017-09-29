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

## Contributing

#### Tests

The test suite is located in the `test/` directory.  All new features are
expected to have corresponding test cases.  Ensure that the complete test suite
passes by executing:

```bash
$ make test
```

#### Coverage

All new feature development is expected to have test coverage.  Patches that
increse test coverage are happily accepted.  Coverage reports can be viewed by
executing:

```bash
$ make test-cov
$ make view-cov
```

## Support

#### Funding

This software is provided to you as open source, free of charge.  The time and
effort to develop and maintain this project is volunteered by [@jaredhanson](https://github.com/jaredhanson).
If you (or your employer) benefit from this project, please consider a financial
contribution.  Your contribution helps continue the efforts that produce this
and other open source software.

Funds are accepted via [PayPal](https://paypal.me/jaredhanson), [Venmo](https://venmo.com/jaredhanson),
and [other](http://jaredhanson.net/pay) methods.  Any amount is appreciated.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
