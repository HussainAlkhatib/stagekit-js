'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2567",
  name: "Replace \"B\" with \"S\"",
  description: "Replaces every B with S.",
  run: (value) => String(value).split("B").join("S"),
});
