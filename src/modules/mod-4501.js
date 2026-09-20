'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4501",
  name: "Replace \"7\" with \"z\"",
  description: "Replaces every 7 with z.",
  run: (value) => String(value).split("7").join("z"),
});
