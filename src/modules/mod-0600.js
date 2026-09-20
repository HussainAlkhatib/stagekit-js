'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0600",
  name: "Replace \"b\" with \"T\"",
  description: "Replaces every b with T.",
  run: (value) => String(value).split("b").join("T"),
});
