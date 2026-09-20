'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3807",
  name: "Replace \"W\" with \"c\"",
  description: "Replaces every W with c.",
  run: (value) => String(value).split("W").join("c"),
});
