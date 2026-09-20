'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4544",
  name: "Replace \"8\" with \"h\"",
  description: "Replaces every 8 with h.",
  run: (value) => String(value).split("8").join("h"),
});
