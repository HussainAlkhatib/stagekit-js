'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4600",
  name: "Replace \"9\" with \"c\"",
  description: "Replaces every 9 with c.",
  run: (value) => String(value).split("9").join("c"),
});
