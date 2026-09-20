'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3347",
  name: "Replace \"O\" with \"E\"",
  description: "Replaces every O with E.",
  run: (value) => String(value).split("O").join("E"),
});
