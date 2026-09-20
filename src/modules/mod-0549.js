'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0549",
  name: "Replace \"b\" with \"C\"",
  description: "Replaces every b with C.",
  run: (value) => String(value).split("b").join("C"),
});
