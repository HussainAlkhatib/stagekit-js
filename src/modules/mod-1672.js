'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1672",
  name: "Replace \"n\" with \"c\"",
  description: "Replaces every n with c.",
  run: (value) => String(value).split("n").join("c"),
});
