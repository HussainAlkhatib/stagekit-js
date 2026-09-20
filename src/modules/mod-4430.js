'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4430",
  name: "Replace \"6\" with \"p\"",
  description: "Replaces every 6 with p.",
  run: (value) => String(value).split("6").join("p"),
});
