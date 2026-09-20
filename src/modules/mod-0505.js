'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0505",
  name: "Replace \"b\" with \"p\"",
  description: "Replaces every b with p.",
  run: (value) => String(value).split("b").join("p"),
});
