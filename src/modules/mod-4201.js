'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4201",
  name: "Replace \"2\" with \"E\"",
  description: "Replaces every 2 with E.",
  run: (value) => String(value).split("2").join("E"),
});
