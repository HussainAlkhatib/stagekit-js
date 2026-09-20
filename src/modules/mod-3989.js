'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3989",
  name: "Replace \"Z\" with \"b\"",
  description: "Replaces every Z with b.",
  run: (value) => String(value).split("Z").join("b"),
});
