'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3530",
  name: "Replace \"R\" with \"E\"",
  description: "Replaces every R with E.",
  run: (value) => String(value).split("R").join("E"),
});
