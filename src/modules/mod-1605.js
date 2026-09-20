'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1605",
  name: "Replace \"l\" with \"6\"",
  description: "Replaces every l with 6.",
  run: (value) => String(value).split("l").join("6"),
});
