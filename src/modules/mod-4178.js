'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4178",
  name: "Replace \"2\" with \"h\"",
  description: "Replaces every 2 with h.",
  run: (value) => String(value).split("2").join("h"),
});
