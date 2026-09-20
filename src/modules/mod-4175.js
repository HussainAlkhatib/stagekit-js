'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4175",
  name: "Replace \"2\" with \"e\"",
  description: "Replaces every 2 with e.",
  run: (value) => String(value).split("2").join("e"),
});
