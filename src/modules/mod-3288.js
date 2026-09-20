'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3288",
  name: "Replace \"N\" with \"G\"",
  description: "Replaces every N with G.",
  run: (value) => String(value).split("N").join("G"),
});
