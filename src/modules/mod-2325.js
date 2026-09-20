'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2325",
  name: "Replace \"x\" with \"U\"",
  description: "Replaces every x with U.",
  run: (value) => String(value).split("x").join("U"),
});
