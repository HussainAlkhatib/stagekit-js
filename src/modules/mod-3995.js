'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3995",
  name: "Replace \"Z\" with \"h\"",
  description: "Replaces every Z with h.",
  run: (value) => String(value).split("Z").join("h"),
});
