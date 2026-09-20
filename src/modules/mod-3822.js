'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3822",
  name: "Replace \"W\" with \"r\"",
  description: "Replaces every W with r.",
  run: (value) => String(value).split("W").join("r"),
});
