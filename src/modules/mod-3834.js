'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3834",
  name: "Replace \"W\" with \"D\"",
  description: "Replaces every W with D.",
  run: (value) => String(value).split("W").join("D"),
});
