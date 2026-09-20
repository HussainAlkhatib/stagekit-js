'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0837",
  name: "Replace \"d\" with \"b\"",
  description: "Replaces every d with b.",
  run: (value) => String(value).split("d").join("b"),
});
