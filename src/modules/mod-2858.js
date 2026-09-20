'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2858",
  name: "Replace \"G\" with \"D\"",
  description: "Replaces every G with D.",
  run: (value) => String(value).split("G").join("D"),
});
