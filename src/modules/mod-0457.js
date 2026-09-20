'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0457",
  name: "Replace \"b\" with \"d\"",
  description: "Replaces every b with d.",
  run: (value) => String(value).split("b").join("d"),
});
