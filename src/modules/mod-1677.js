'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1677",
  name: "Replace \"n\" with \"h\"",
  description: "Replaces every n with h.",
  run: (value) => String(value).split("n").join("h"),
});
