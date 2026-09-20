'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3568",
  name: "Replace \"S\" with \"h\"",
  description: "Replaces every S with h.",
  run: (value) => String(value).split("S").join("h"),
});
