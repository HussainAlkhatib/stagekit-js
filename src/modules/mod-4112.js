'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4112",
  name: "Replace \"1\" with \"c\"",
  description: "Replaces every 1 with c.",
  run: (value) => String(value).split("1").join("c"),
});
