'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4233",
  name: "Replace \"3\" with \"b\"",
  description: "Replaces every 3 with b.",
  run: (value) => String(value).split("3").join("b"),
});
