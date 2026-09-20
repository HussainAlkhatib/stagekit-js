'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0461",
  name: "Replace \"b\" with \"e\"",
  description: "Replaces every b with e.",
  run: (value) => String(value).split("b").join("e"),
});
