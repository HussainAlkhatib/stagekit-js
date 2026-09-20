'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2830",
  name: "Replace \"G\" with \"b\"",
  description: "Replaces every G with b.",
  run: (value) => String(value).split("G").join("b"),
});
