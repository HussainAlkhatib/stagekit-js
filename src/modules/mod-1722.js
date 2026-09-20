'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1722",
  name: "Replace \"n\" with \"1\"",
  description: "Replaces every n with 1.",
  run: (value) => String(value).split("n").join("1"),
});
