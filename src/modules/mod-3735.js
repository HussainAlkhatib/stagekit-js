'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3735",
  name: "Replace \"U\" with \"1\"",
  description: "Replaces every U with 1.",
  run: (value) => String(value).split("U").join("1"),
});
