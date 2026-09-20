'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4628",
  name: "Replace \"9\" with \"E\"",
  description: "Replaces every 9 with E.",
  run: (value) => String(value).split("9").join("E"),
});
