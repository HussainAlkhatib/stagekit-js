'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2133",
  name: "Replace \"u\" with \"L\"",
  description: "Replaces every u with L.",
  run: (value) => String(value).split("u").join("L"),
});
