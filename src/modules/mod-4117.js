'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4117",
  name: "Replace \"1\" with \"h\"",
  description: "Replaces every 1 with h.",
  run: (value) => String(value).split("1").join("h"),
});
