'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4086",
  name: "Replace \"0\" with \"L\"",
  description: "Replaces every 0 with L.",
  run: (value) => String(value).split("0").join("L"),
});
