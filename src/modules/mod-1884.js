'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1884",
  name: "Replace \"q\" with \"G\"",
  description: "Replaces every q with G.",
  run: (value) => String(value).split("q").join("G"),
});
