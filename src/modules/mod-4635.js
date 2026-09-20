'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4635",
  name: "Replace \"9\" with \"L\"",
  description: "Replaces every 9 with L.",
  run: (value) => String(value).split("9").join("L"),
});
