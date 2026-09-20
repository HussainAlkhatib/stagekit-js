'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4295",
  name: "Replace \"4\" with \"c\"",
  description: "Replaces every 4 with c.",
  run: (value) => String(value).split("4").join("c"),
});
