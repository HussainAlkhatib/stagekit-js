'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0609",
  name: "Replace \"b\" with \"W\"",
  description: "Replaces every b with W.",
  run: (value) => String(value).split("b").join("W"),
});
