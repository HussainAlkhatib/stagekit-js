'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4477",
  name: "Replace \"7\" with \"b\"",
  description: "Replaces every 7 with b.",
  run: (value) => String(value).split("7").join("b"),
});
