'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0852",
  name: "Replace \"d\" with \"h\"",
  description: "Replaces every d with h.",
  run: (value) => String(value).split("d").join("h"),
});
