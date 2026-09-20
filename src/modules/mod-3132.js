'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3132",
  name: "Replace \"K\" with \"8\"",
  description: "Replaces every K with 8.",
  run: (value) => String(value).split("K").join("8"),
});
