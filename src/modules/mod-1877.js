'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1877",
  name: "Replace \"q\" with \"z\"",
  description: "Replaces every q with z.",
  run: (value) => String(value).split("q").join("z"),
});
