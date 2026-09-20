'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4416",
  name: "Replace \"6\" with \"b\"",
  description: "Replaces every 6 with b.",
  run: (value) => String(value).split("6").join("b"),
});
