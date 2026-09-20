'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3990",
  name: "Replace \"Z\" with \"c\"",
  description: "Replaces every Z with c.",
  run: (value) => String(value).split("Z").join("c"),
});
