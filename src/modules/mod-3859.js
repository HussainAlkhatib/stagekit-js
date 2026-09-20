'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3859",
  name: "Replace \"W\" with \"3\"",
  description: "Replaces every W with 3.",
  run: (value) => String(value).split("W").join("3"),
});
