'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3669",
  name: "Replace \"T\" with \"W\"",
  description: "Replaces every T with W.",
  run: (value) => String(value).split("T").join("W"),
});
