'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1458",
  name: "Replace \"j\" with \"H\"",
  description: "Replaces every j with H.",
  run: (value) => String(value).split("j").join("H"),
});
