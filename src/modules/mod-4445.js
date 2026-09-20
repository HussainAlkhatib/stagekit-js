'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4445",
  name: "Replace \"6\" with \"E\"",
  description: "Replaces every 6 with E.",
  run: (value) => String(value).split("6").join("E"),
});
