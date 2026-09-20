'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3624",
  name: "Replace \"T\" with \"c\"",
  description: "Replaces every T with c.",
  run: (value) => String(value).split("T").join("c"),
});
