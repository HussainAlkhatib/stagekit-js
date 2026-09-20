'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3274",
  name: "Replace \"N\" with \"s\"",
  description: "Replaces every N with s.",
  run: (value) => String(value).split("N").join("s"),
});
