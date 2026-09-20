'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1332",
  name: "Replace \"h\" with \"D\"",
  description: "Replaces every h with D.",
  run: (value) => String(value).split("h").join("D"),
});
