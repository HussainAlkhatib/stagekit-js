'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1966",
  name: "Replace \"r\" with \"1\"",
  description: "Replaces every r with 1.",
  run: (value) => String(value).split("r").join("1"),
});
