'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3478",
  name: "Replace \"Q\" with \"N\"",
  description: "Replaces every Q with N.",
  run: (value) => String(value).split("Q").join("N"),
});
