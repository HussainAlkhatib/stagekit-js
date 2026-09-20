'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4470",
  name: "Replace \"6\" with \"3\"",
  description: "Replaces every 6 with 3.",
  run: (value) => String(value).split("6").join("3"),
});
