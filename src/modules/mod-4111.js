'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4111",
  name: "Replace \"1\" with \"b\"",
  description: "Replaces every 1 with b.",
  run: (value) => String(value).split("1").join("b"),
});
