'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3257",
  name: "Replace \"N\" with \"b\"",
  description: "Replaces every N with b.",
  run: (value) => String(value).split("N").join("b"),
});
