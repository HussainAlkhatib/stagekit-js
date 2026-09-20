'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3722",
  name: "Replace \"U\" with \"N\"",
  description: "Replaces every U with N.",
  run: (value) => String(value).split("U").join("N"),
});
