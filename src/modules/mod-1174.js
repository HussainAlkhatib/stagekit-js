'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1174",
  name: "Replace \"e\" with \"2\"",
  description: "Replaces every e with 2.",
  run: (value) => String(value).split("e").join("2"),
});
