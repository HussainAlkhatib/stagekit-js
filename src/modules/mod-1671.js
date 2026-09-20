'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1671",
  name: "Replace \"n\" with \"b\"",
  description: "Replaces every n with b.",
  run: (value) => String(value).split("n").join("b"),
});
