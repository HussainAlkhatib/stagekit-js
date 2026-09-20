'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3097",
  name: "Replace \"K\" with \"y\"",
  description: "Replaces every K with y.",
  run: (value) => String(value).split("K").join("y"),
});
