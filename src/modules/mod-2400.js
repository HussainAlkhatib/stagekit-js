'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2400",
  name: "Replace \"y\" with \"8\"",
  description: "Replaces every y with 8.",
  run: (value) => String(value).split("y").join("8"),
});
