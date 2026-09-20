'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3080",
  name: "Replace \"K\" with \"h\"",
  description: "Replaces every K with h.",
  run: (value) => String(value).split("K").join("h"),
});
