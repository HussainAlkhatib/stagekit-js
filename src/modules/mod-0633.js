'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0633",
  name: "Replace \"b\" with \"4\"",
  description: "Replaces every b with 4.",
  run: (value) => String(value).split("b").join("4"),
});
