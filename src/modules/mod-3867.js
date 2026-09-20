'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3867",
  name: "Replace \"X\" with \"b\"",
  description: "Replaces every X with b.",
  run: (value) => String(value).split("X").join("b"),
});
