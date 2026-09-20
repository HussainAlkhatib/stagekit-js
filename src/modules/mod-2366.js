'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2366",
  name: "Replace \"y\" with \"A\"",
  description: "Replaces every y with A.",
  run: (value) => String(value).split("y").join("A"),
});
