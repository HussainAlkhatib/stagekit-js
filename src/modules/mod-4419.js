'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4419",
  name: "Replace \"6\" with \"e\"",
  description: "Replaces every 6 with e.",
  run: (value) => String(value).split("6").join("e"),
});
