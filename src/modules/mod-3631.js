'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3631",
  name: "Replace \"T\" with \"j\"",
  description: "Replaces every T with j.",
  run: (value) => String(value).split("T").join("j"),
});
