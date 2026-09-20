'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1183",
  name: "Replace \"f\" with \"b\"",
  description: "Replaces every f with b.",
  run: (value) => String(value).split("f").join("b"),
});
