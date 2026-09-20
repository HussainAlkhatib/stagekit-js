'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0453",
  name: "Replace \"b\" with \"c\"",
  description: "Replaces every b with c.",
  run: (value) => String(value).split("b").join("c"),
});
