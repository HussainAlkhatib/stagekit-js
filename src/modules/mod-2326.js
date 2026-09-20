'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2326",
  name: "Replace \"x\" with \"V\"",
  description: "Replaces every x with V.",
  run: (value) => String(value).split("x").join("V"),
});
