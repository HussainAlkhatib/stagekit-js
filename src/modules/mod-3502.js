'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3502",
  name: "Replace \"R\" with \"c\"",
  description: "Replaces every R with c.",
  run: (value) => String(value).split("R").join("c"),
});
