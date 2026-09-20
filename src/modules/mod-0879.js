'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0879",
  name: "Replace \"d\" with \"q\"",
  description: "Replaces every d with q.",
  run: (value) => String(value).split("d").join("q"),
});
