'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1999",
  name: "Replace \"s\" with \"z\"",
  description: "Replaces every s with z.",
  run: (value) => String(value).split("s").join("z"),
});
