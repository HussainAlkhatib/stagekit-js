'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1462",
  name: "Replace \"j\" with \"L\"",
  description: "Replaces every j with L.",
  run: (value) => String(value).split("j").join("L"),
});
