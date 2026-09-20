'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2891",
  name: "Replace \"H\" with \"b\"",
  description: "Replaces every H with b.",
  run: (value) => String(value).split("H").join("b"),
});
