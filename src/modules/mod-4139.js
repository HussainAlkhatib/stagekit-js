'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4139",
  name: "Replace \"1\" with \"D\"",
  description: "Replaces every 1 with D.",
  run: (value) => String(value).split("1").join("D"),
});
