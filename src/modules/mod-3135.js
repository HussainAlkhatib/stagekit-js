'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3135",
  name: "Replace \"L\" with \"b\"",
  description: "Replaces every L with b.",
  run: (value) => String(value).split("L").join("b"),
});
