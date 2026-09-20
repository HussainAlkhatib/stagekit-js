'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0597",
  name: "Replace \"b\" with \"S\"",
  description: "Replaces every b with S.",
  run: (value) => String(value).split("b").join("S"),
});
