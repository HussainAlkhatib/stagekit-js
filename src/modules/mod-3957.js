'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3957",
  name: "Replace \"Y\" with \"E\"",
  description: "Replaces every Y with E.",
  run: (value) => String(value).split("Y").join("E"),
});
