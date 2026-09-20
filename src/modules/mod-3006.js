'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3006",
  name: "Replace \"I\" with \"4\"",
  description: "Replaces every I with 4.",
  run: (value) => String(value).split("I").join("4"),
});
