'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2586",
  name: "Replace \"C\" with \"b\"",
  description: "Replaces every C with b.",
  run: (value) => String(value).split("C").join("b"),
});
