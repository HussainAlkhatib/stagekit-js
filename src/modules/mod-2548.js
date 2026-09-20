'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2548",
  name: "Replace \"B\" with \"y\"",
  description: "Replaces every B with y.",
  run: (value) => String(value).split("B").join("y"),
});
