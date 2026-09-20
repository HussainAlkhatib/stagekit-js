'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4480",
  name: "Replace \"7\" with \"e\"",
  description: "Replaces every 7 with e.",
  run: (value) => String(value).split("7").join("e"),
});
