'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4163",
  name: "Replace \"1\" with \"2\"",
  description: "Replaces every 1 with 2.",
  run: (value) => String(value).split("1").join("2"),
});
