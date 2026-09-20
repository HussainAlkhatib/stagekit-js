'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3864",
  name: "Replace \"W\" with \"8\"",
  description: "Replaces every W with 8.",
  run: (value) => String(value).split("W").join("8"),
});
