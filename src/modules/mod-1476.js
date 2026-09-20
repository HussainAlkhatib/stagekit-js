'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1476",
  name: "Replace \"j\" with \"Z\"",
  description: "Replaces every j with Z.",
  run: (value) => String(value).split("j").join("Z"),
});
