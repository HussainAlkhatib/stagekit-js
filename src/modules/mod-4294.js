'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4294",
  name: "Replace \"4\" with \"b\"",
  description: "Replaces every 4 with b.",
  run: (value) => String(value).split("4").join("b"),
});
