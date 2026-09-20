'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1891",
  name: "Replace \"q\" with \"N\"",
  description: "Replaces every q with N.",
  run: (value) => String(value).split("q").join("N"),
});
