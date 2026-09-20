'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4079",
  name: "Replace \"0\" with \"E\"",
  description: "Replaces every 0 with E.",
  run: (value) => String(value).split("0").join("E"),
});
