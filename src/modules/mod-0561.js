'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0561",
  name: "Replace \"b\" with \"G\"",
  description: "Replaces every b with G.",
  run: (value) => String(value).split("b").join("G"),
});
