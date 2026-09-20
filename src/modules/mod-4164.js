'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4164",
  name: "Replace \"1\" with \"3\"",
  description: "Replaces every 1 with 3.",
  run: (value) => String(value).split("1").join("3"),
});
