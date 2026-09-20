'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3656",
  name: "Replace \"T\" with \"I\"",
  description: "Replaces every T with I.",
  run: (value) => String(value).split("T").join("I"),
});
