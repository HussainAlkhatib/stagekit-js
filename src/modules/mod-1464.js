'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1464",
  name: "Replace \"j\" with \"N\"",
  description: "Replaces every j with N.",
  run: (value) => String(value).split("j").join("N"),
});
