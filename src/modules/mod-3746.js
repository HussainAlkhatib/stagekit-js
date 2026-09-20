'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3746",
  name: "Replace \"V\" with \"c\"",
  description: "Replaces every V with c.",
  run: (value) => String(value).split("V").join("c"),
});
