'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4615",
  name: "Replace \"9\" with \"r\"",
  description: "Replaces every 9 with r.",
  run: (value) => String(value).split("9").join("r"),
});
