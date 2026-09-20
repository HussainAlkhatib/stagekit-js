'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1466",
  name: "Replace \"j\" with \"P\"",
  description: "Replaces every j with P.",
  run: (value) => String(value).split("j").join("P"),
});
