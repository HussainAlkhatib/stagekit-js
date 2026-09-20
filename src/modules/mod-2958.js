'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2958",
  name: "Replace \"I\" with \"h\"",
  description: "Replaces every I with h.",
  run: (value) => String(value).split("I").join("h"),
});
