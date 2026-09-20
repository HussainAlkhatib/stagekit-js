'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4135",
  name: "Replace \"1\" with \"z\"",
  description: "Replaces every 1 with z.",
  run: (value) => String(value).split("1").join("z"),
});
