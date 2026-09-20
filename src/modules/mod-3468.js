'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3468",
  name: "Replace \"Q\" with \"D\"",
  description: "Replaces every Q with D.",
  run: (value) => String(value).split("Q").join("D"),
});
