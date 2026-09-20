'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1638",
  name: "Replace \"m\" with \"E\"",
  description: "Replaces every m with E.",
  run: (value) => String(value).split("m").join("E"),
});
