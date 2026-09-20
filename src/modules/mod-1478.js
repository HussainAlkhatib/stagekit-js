'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1478",
  name: "Replace \"j\" with \"1\"",
  description: "Replaces every j with 1.",
  run: (value) => String(value).split("j").join("1"),
});
