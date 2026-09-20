'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1020",
  name: "Replace \"e\" with \"b\"",
  description: "Replaces every e with b.",
  run: (value) => String(value).split("e").join("b"),
});
