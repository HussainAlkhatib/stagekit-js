'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4384",
  name: "Replace \"5\" with \"E\"",
  description: "Replaces every 5 with E.",
  run: (value) => String(value).split("5").join("E"),
});
