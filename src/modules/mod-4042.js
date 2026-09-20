'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4042",
  name: "Replace \"Z\" with \"3\"",
  description: "Replaces every Z with 3.",
  run: (value) => String(value).split("Z").join("3"),
});
