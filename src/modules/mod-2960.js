'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2960",
  name: "Replace \"I\" with \"j\"",
  description: "Replaces every I with j.",
  run: (value) => String(value).split("I").join("j"),
});
