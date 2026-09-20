'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4627",
  name: "Replace \"9\" with \"D\"",
  description: "Replaces every 9 with D.",
  run: (value) => String(value).split("9").join("D"),
});
