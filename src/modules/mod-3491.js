'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3491",
  name: "Replace \"Q\" with \"1\"",
  description: "Replaces every Q with 1.",
  run: (value) => String(value).split("Q").join("1"),
});
