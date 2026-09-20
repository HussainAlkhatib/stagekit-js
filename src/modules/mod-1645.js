'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1645",
  name: "Replace \"m\" with \"L\"",
  description: "Replaces every m with L.",
  run: (value) => String(value).split("m").join("L"),
});
