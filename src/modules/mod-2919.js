'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2919",
  name: "Replace \"H\" with \"D\"",
  description: "Replaces every H with D.",
  run: (value) => String(value).split("H").join("D"),
});
