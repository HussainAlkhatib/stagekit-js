'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3507",
  name: "Replace \"R\" with \"h\"",
  description: "Replaces every R with h.",
  run: (value) => String(value).split("R").join("h"),
});
