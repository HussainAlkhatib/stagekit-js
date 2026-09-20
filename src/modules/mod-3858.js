'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3858",
  name: "Replace \"W\" with \"2\"",
  description: "Replaces every W with 2.",
  run: (value) => String(value).split("W").join("2"),
});
