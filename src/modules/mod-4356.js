'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4356",
  name: "Replace \"5\" with \"c\"",
  description: "Replaces every 5 with c.",
  run: (value) => String(value).split("5").join("c"),
});
