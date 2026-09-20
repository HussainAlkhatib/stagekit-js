'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1367",
  name: "Replace \"i\" with \"c\"",
  description: "Replaces every i with c.",
  run: (value) => String(value).split("i").join("c"),
});
