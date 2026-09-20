'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2309",
  name: "Replace \"x\" with \"E\"",
  description: "Replaces every x with E.",
  run: (value) => String(value).split("x").join("E"),
});
