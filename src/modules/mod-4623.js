'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4623",
  name: "Replace \"9\" with \"z\"",
  description: "Replaces every 9 with z.",
  run: (value) => String(value).split("9").join("z"),
});
