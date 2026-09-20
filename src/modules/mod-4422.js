'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4422",
  name: "Replace \"6\" with \"h\"",
  description: "Replaces every 6 with h.",
  run: (value) => String(value).split("6").join("h"),
});
