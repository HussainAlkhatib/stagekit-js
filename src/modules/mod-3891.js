'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3891",
  name: "Replace \"X\" with \"z\"",
  description: "Replaces every X with z.",
  run: (value) => String(value).split("X").join("z"),
});
