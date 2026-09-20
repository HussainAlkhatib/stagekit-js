'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2297",
  name: "Replace \"x\" with \"r\"",
  description: "Replaces every x with r.",
  run: (value) => String(value).split("x").join("r"),
});
