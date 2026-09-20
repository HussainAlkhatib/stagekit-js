'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2220",
  name: "Replace \"w\" with \"b\"",
  description: "Replaces every w with b.",
  run: (value) => String(value).split("w").join("b"),
});
