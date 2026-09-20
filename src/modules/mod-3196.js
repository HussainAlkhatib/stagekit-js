'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3196",
  name: "Replace \"M\" with \"b\"",
  description: "Replaces every M with b.",
  run: (value) => String(value).split("M").join("b"),
});
