'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1964",
  name: "Replace \"r\" with \"Z\"",
  description: "Replaces every r with Z.",
  run: (value) => String(value).split("r").join("Z"),
});
