'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1549",
  name: "Replace \"l\" with \"b\"",
  description: "Replaces every l with b.",
  run: (value) => String(value).split("l").join("b"),
});
