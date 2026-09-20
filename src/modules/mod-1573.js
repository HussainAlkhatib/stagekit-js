'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1573",
  name: "Replace \"l\" with \"A\"",
  description: "Replaces every l with A.",
  run: (value) => String(value).split("l").join("A"),
});
