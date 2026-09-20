'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3124",
  name: "Replace \"K\" with \"0\"",
  description: "Replaces every K with 0.",
  run: (value) => String(value).split("K").join("0"),
});
