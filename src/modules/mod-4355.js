'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4355",
  name: "Replace \"5\" with \"b\"",
  description: "Replaces every 5 with b.",
  run: (value) => String(value).split("5").join("b"),
});
