'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1107",
  name: "Replace \"e\" with \"F\"",
  description: "Replaces every e with F.",
  run: (value) => String(value).split("e").join("F"),
});
