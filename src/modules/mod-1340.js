'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1340",
  name: "Replace \"h\" with \"L\"",
  description: "Replaces every h with L.",
  run: (value) => String(value).split("h").join("L"),
});
