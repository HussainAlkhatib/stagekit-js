'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4172",
  name: "Replace \"2\" with \"b\"",
  description: "Replaces every 2 with b.",
  run: (value) => String(value).split("2").join("b"),
});
