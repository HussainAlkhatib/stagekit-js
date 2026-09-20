'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3014",
  name: "Replace \"J\" with \"c\"",
  description: "Replaces every J with c.",
  run: (value) => String(value).split("J").join("c"),
});
