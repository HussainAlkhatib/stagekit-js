'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1976",
  name: "Replace \"s\" with \"b\"",
  description: "Replaces every s with b.",
  run: (value) => String(value).split("s").join("b"),
});
