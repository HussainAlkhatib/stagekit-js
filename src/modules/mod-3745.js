'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3745",
  name: "Replace \"V\" with \"b\"",
  description: "Replaces every V with b.",
  run: (value) => String(value).split("V").join("b"),
});
