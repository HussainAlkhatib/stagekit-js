'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2370",
  name: "Replace \"y\" with \"E\"",
  description: "Replaces every y with E.",
  run: (value) => String(value).split("y").join("E"),
});
