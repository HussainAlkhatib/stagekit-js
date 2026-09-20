'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1104",
  name: "Replace \"e\" with \"E\"",
  description: "Replaces every e with E.",
  run: (value) => String(value).split("e").join("E"),
});
