'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4506",
  name: "Replace \"7\" with \"E\"",
  description: "Replaces every 7 with E.",
  run: (value) => String(value).split("7").join("E"),
});
