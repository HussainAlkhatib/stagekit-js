'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2981",
  name: "Replace \"I\" with \"E\"",
  description: "Replaces every I with E.",
  run: (value) => String(value).split("I").join("E"),
});
