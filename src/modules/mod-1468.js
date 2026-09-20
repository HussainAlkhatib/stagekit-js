'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1468",
  name: "Replace \"j\" with \"R\"",
  description: "Replaces every j with R.",
  run: (value) => String(value).split("j").join("R"),
});
