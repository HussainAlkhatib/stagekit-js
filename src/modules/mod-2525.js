'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2525",
  name: "Replace \"B\" with \"b\"",
  description: "Replaces every B with b.",
  run: (value) => String(value).split("B").join("b"),
});
