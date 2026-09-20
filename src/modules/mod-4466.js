'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4466",
  name: "Replace \"6\" with \"Z\"",
  description: "Replaces every 6 with Z.",
  run: (value) => String(value).split("6").join("Z"),
});
