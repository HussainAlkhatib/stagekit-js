'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4589",
  name: "Replace \"8\" with \"0\"",
  description: "Replaces every 8 with 0.",
  run: (value) => String(value).split("8").join("0"),
});
