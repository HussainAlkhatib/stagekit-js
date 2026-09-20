'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1906",
  name: "Replace \"q\" with \"2\"",
  description: "Replaces every q with 2.",
  run: (value) => String(value).split("q").join("2"),
});
