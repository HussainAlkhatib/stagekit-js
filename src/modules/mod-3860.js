'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3860",
  name: "Replace \"W\" with \"4\"",
  description: "Replaces every W with 4.",
  run: (value) => String(value).split("W").join("4"),
});
