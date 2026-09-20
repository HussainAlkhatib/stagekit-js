'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1584",
  name: "Replace \"l\" with \"L\"",
  description: "Replaces every l with L.",
  run: (value) => String(value).split("l").join("L"),
});
