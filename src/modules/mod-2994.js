'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2994",
  name: "Replace \"I\" with \"S\"",
  description: "Replaces every I with S.",
  run: (value) => String(value).split("I").join("S"),
});
