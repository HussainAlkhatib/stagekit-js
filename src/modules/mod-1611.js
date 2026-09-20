'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1611",
  name: "Replace \"m\" with \"c\"",
  description: "Replaces every m with c.",
  run: (value) => String(value).split("m").join("c"),
});
