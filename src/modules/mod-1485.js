'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1485",
  name: "Replace \"j\" with \"8\"",
  description: "Replaces every j with 8.",
  run: (value) => String(value).split("j").join("8"),
});
