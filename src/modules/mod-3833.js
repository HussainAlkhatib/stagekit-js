'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3833",
  name: "Replace \"W\" with \"C\"",
  description: "Replaces every W with C.",
  run: (value) => String(value).split("W").join("C"),
});
