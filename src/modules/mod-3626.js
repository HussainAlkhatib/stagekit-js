'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3626",
  name: "Replace \"T\" with \"e\"",
  description: "Replaces every T with e.",
  run: (value) => String(value).split("T").join("e"),
});
