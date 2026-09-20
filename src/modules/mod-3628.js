'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3628",
  name: "Replace \"T\" with \"g\"",
  description: "Replaces every T with g.",
  run: (value) => String(value).split("T").join("g"),
});
