'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4599",
  name: "Replace \"9\" with \"b\"",
  description: "Replaces every 9 with b.",
  run: (value) => String(value).split("9").join("b"),
});
