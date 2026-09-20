'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2977",
  name: "Replace \"I\" with \"A\"",
  description: "Replaces every I with A.",
  run: (value) => String(value).split("I").join("A"),
});
