'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3675",
  name: "Replace \"T\" with \"2\"",
  description: "Replaces every T with 2.",
  run: (value) => String(value).split("T").join("2"),
});
