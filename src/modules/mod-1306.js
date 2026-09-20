'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1306",
  name: "Replace \"h\" with \"c\"",
  description: "Replaces every h with c.",
  run: (value) => String(value).split("h").join("c"),
});
