'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3099",
  name: "Replace \"K\" with \"A\"",
  description: "Replaces every K with A.",
  run: (value) => String(value).split("K").join("A"),
});
