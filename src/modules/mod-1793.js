'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1793",
  name: "Replace \"p\" with \"b\"",
  description: "Replaces every p with b.",
  run: (value) => String(value).split("p").join("b"),
});
