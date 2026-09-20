'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1732",
  name: "Replace \"o\" with \"b\"",
  description: "Replaces every o with b.",
  run: (value) => String(value).split("o").join("b"),
});
