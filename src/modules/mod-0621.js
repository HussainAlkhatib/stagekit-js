'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0621",
  name: "Replace \"b\" with \"0\"",
  description: "Replaces every b with 0.",
  run: (value) => String(value).split("b").join("0"),
});
