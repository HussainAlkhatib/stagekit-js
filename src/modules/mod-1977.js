'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1977",
  name: "Replace \"s\" with \"c\"",
  description: "Replaces every s with c.",
  run: (value) => String(value).split("s").join("c"),
});
