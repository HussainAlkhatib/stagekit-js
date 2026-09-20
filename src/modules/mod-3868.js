'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3868",
  name: "Replace \"X\" with \"c\"",
  description: "Replaces every X with c.",
  run: (value) => String(value).split("X").join("c"),
});
