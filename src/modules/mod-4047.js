'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4047",
  name: "Replace \"Z\" with \"8\"",
  description: "Replaces every Z with 8.",
  run: (value) => String(value).split("Z").join("8"),
});
