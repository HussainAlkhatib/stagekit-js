'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2303",
  name: "Replace \"x\" with \"y\"",
  description: "Replaces every x with y.",
  run: (value) => String(value).split("x").join("y"),
});
