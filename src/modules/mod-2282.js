'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2282",
  name: "Replace \"x\" with \"c\"",
  description: "Replaces every x with c.",
  run: (value) => String(value).split("x").join("c"),
});
