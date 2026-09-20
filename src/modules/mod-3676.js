'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3676",
  name: "Replace \"T\" with \"3\"",
  description: "Replaces every T with 3.",
  run: (value) => String(value).split("T").join("3"),
});
