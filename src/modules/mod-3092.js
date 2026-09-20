'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3092",
  name: "Replace \"K\" with \"t\"",
  description: "Replaces every K with t.",
  run: (value) => String(value).split("K").join("t"),
});
