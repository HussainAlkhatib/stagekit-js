'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2587",
  name: "Replace \"C\" with \"c\"",
  description: "Replaces every C with c.",
  run: (value) => String(value).split("C").join("c"),
});
