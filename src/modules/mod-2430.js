'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2430",
  name: "Replace \"z\" with \"D\"",
  description: "Replaces every z with D.",
  run: (value) => String(value).split("z").join("D"),
});
