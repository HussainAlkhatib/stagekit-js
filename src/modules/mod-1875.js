'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1875",
  name: "Replace \"q\" with \"x\"",
  description: "Replaces every q with x.",
  run: (value) => String(value).split("q").join("x"),
});
