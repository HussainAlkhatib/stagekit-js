'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3633",
  name: "Replace \"T\" with \"l\"",
  description: "Replaces every T with l.",
  run: (value) => String(value).split("T").join("l"),
});
