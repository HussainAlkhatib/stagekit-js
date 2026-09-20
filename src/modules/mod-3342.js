'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3342",
  name: "Replace \"O\" with \"z\"",
  description: "Replaces every O with z.",
  run: (value) => String(value).split("O").join("z"),
});
