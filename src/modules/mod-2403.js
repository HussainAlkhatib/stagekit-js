'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2403",
  name: "Replace \"z\" with \"b\"",
  description: "Replaces every z with b.",
  run: (value) => String(value).split("z").join("b"),
});
