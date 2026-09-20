'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4074",
  name: "Replace \"0\" with \"z\"",
  description: "Replaces every 0 with z.",
  run: (value) => String(value).split("0").join("z"),
});
