'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0543",
  name: "Replace \"b\" with \"A\"",
  description: "Replaces every b with A.",
  run: (value) => String(value).split("b").join("A"),
});
