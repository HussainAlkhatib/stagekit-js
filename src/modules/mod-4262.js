'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4262",
  name: "Replace \"3\" with \"E\"",
  description: "Replaces every 3 with E.",
  run: (value) => String(value).split("3").join("E"),
});
