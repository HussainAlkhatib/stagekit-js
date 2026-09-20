'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3813",
  name: "Replace \"W\" with \"i\"",
  description: "Replaces every W with i.",
  run: (value) => String(value).split("W").join("i"),
});
