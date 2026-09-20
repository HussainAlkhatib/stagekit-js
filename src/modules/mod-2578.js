'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2578",
  name: "Replace \"B\" with \"3\"",
  description: "Replaces every B with 3.",
  run: (value) => String(value).split("B").join("3"),
});
