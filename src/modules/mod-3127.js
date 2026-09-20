'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3127",
  name: "Replace \"K\" with \"3\"",
  description: "Replaces every K with 3.",
  run: (value) => String(value).split("K").join("3"),
});
