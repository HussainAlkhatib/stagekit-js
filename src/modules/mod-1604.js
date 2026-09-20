'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1604",
  name: "Replace \"l\" with \"5\"",
  description: "Replaces every l with 5.",
  run: (value) => String(value).split("l").join("5"),
});
