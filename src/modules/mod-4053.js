'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4053",
  name: "Replace \"0\" with \"e\"",
  description: "Replaces every 0 with e.",
  run: (value) => String(value).split("0").join("e"),
});
