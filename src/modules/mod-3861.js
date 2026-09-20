'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3861",
  name: "Replace \"W\" with \"5\"",
  description: "Replaces every W with 5.",
  run: (value) => String(value).split("W").join("5"),
});
