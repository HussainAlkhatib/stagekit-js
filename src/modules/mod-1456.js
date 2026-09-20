'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1456",
  name: "Replace \"j\" with \"F\"",
  description: "Replaces every j with F.",
  run: (value) => String(value).split("j").join("F"),
});
