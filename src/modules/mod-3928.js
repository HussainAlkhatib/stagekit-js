'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3928",
  name: "Replace \"Y\" with \"b\"",
  description: "Replaces every Y with b.",
  run: (value) => String(value).split("Y").join("b"),
});
