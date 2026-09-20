'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0942",
  name: "Replace \"d\" with \"L\"",
  description: "Replaces every d with L.",
  run: (value) => String(value).split("d").join("L"),
});
