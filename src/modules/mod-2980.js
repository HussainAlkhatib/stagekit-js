'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2980",
  name: "Replace \"I\" with \"D\"",
  description: "Replaces every I with D.",
  run: (value) => String(value).split("I").join("D"),
});
