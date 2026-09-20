'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1591",
  name: "Replace \"l\" with \"S\"",
  description: "Replaces every l with S.",
  run: (value) => String(value).split("l").join("S"),
});
