'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4147",
  name: "Replace \"1\" with \"L\"",
  description: "Replaces every 1 with L.",
  run: (value) => String(value).split("1").join("L"),
});
