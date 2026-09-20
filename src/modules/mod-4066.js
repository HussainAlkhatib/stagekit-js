'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4066",
  name: "Replace \"0\" with \"r\"",
  description: "Replaces every 0 with r.",
  run: (value) => String(value).split("0").join("r"),
});
