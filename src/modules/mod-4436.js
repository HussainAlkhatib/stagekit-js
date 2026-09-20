'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4436",
  name: "Replace \"6\" with \"v\"",
  description: "Replaces every 6 with v.",
  run: (value) => String(value).split("6").join("v"),
});
