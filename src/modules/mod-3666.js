'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3666",
  name: "Replace \"T\" with \"S\"",
  description: "Replaces every T with S.",
  run: (value) => String(value).split("T").join("S"),
});
