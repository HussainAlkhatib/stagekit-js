'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2342",
  name: "Replace \"y\" with \"b\"",
  description: "Replaces every y with b.",
  run: (value) => String(value).split("y").join("b"),
});
