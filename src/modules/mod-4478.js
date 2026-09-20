'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4478",
  name: "Replace \"7\" with \"c\"",
  description: "Replaces every 7 with c.",
  run: (value) => String(value).split("7").join("c"),
});
