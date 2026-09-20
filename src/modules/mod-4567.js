'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4567",
  name: "Replace \"8\" with \"E\"",
  description: "Replaces every 8 with E.",
  run: (value) => String(value).split("8").join("E"),
});
