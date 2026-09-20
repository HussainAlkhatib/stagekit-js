'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2849",
  name: "Replace \"G\" with \"u\"",
  description: "Replaces every G with u.",
  run: (value) => String(value).split("G").join("u"),
});
