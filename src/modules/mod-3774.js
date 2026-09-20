'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3774",
  name: "Replace \"V\" with \"E\"",
  description: "Replaces every V with E.",
  run: (value) => String(value).split("V").join("E"),
});
