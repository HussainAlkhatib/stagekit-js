'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3652",
  name: "Replace \"T\" with \"E\"",
  description: "Replaces every T with E.",
  run: (value) => String(value).split("T").join("E"),
});
