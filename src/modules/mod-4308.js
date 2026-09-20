'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4308",
  name: "Replace \"4\" with \"p\"",
  description: "Replaces every 4 with p.",
  run: (value) => String(value).split("4").join("p"),
});
