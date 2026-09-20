'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3456",
  name: "Replace \"Q\" with \"r\"",
  description: "Replaces every Q with r.",
  run: (value) => String(value).split("Q").join("r"),
});
