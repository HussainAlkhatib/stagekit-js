'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1184",
  name: "Replace \"f\" with \"c\"",
  description: "Replaces every f with c.",
  run: (value) => String(value).split("f").join("c"),
});
