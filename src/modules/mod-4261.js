'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4261",
  name: "Replace \"3\" with \"D\"",
  description: "Replaces every 3 with D.",
  run: (value) => String(value).split("3").join("D"),
});
