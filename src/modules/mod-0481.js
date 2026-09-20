'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0481",
  name: "Replace \"b\" with \"j\"",
  description: "Replaces every b with j.",
  run: (value) => String(value).split("b").join("j"),
});
