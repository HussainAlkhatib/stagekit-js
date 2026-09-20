'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2953",
  name: "Replace \"I\" with \"c\"",
  description: "Replaces every I with c.",
  run: (value) => String(value).split("I").join("c"),
});
