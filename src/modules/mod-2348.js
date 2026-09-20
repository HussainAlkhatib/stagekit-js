'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2348",
  name: "Replace \"y\" with \"h\"",
  description: "Replaces every y with h.",
  run: (value) => String(value).split("y").join("h"),
});
