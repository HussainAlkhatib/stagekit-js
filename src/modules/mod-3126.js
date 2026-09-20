'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3126",
  name: "Replace \"K\" with \"2\"",
  description: "Replaces every K with 2.",
  run: (value) => String(value).split("K").join("2"),
});
