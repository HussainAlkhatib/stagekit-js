'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2920",
  name: "Replace \"H\" with \"E\"",
  description: "Replaces every H with E.",
  run: (value) => String(value).split("H").join("E"),
});
