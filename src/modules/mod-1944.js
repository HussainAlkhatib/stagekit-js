'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1944",
  name: "Replace \"r\" with \"F\"",
  description: "Replaces every r with F.",
  run: (value) => String(value).split("r").join("F"),
});
