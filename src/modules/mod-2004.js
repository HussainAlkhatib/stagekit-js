'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2004",
  name: "Replace \"s\" with \"E\"",
  description: "Replaces every s with E.",
  run: (value) => String(value).split("s").join("E"),
});
