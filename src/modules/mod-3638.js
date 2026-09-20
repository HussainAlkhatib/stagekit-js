'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3638",
  name: "Replace \"T\" with \"q\"",
  description: "Replaces every T with q.",
  run: (value) => String(value).split("T").join("q"),
});
