'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3720",
  name: "Replace \"U\" with \"L\"",
  description: "Replaces every U with L.",
  run: (value) => String(value).split("U").join("L"),
});
