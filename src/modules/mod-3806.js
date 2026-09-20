'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3806",
  name: "Replace \"W\" with \"b\"",
  description: "Replaces every W with b.",
  run: (value) => String(value).split("W").join("b"),
});
