'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2464",
  name: "Replace \"A\" with \"b\"",
  description: "Replaces every A with b.",
  run: (value) => String(value).split("A").join("b"),
});
