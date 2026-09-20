'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1934",
  name: "Replace \"r\" with \"v\"",
  description: "Replaces every r with v.",
  run: (value) => String(value).split("r").join("v"),
});
