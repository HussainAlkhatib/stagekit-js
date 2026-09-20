'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4417",
  name: "Replace \"6\" with \"c\"",
  description: "Replaces every 6 with c.",
  run: (value) => String(value).split("6").join("c"),
});
