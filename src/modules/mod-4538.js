'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4538",
  name: "Replace \"8\" with \"b\"",
  description: "Replaces every 8 with b.",
  run: (value) => String(value).split("8").join("b"),
});
