'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3164",
  name: "Replace \"L\" with \"E\"",
  description: "Replaces every L with E.",
  run: (value) => String(value).split("L").join("E"),
});
