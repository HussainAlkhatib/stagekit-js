'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2985",
  name: "Replace \"I\" with \"J\"",
  description: "Replaces every I with J.",
  run: (value) => String(value).split("I").join("J"),
});
