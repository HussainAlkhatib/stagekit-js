'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4552",
  name: "Replace \"8\" with \"p\"",
  description: "Replaces every 8 with p.",
  run: (value) => String(value).split("8").join("p"),
});
