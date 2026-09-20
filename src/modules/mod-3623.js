'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3623",
  name: "Replace \"T\" with \"b\"",
  description: "Replaces every T with b.",
  run: (value) => String(value).split("T").join("b"),
});
