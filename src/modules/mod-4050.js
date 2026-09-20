'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4050",
  name: "Replace \"0\" with \"b\"",
  description: "Replaces every 0 with b.",
  run: (value) => String(value).split("0").join("b"),
});
