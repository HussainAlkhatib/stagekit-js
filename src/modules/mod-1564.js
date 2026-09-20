'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1564",
  name: "Replace \"l\" with \"r\"",
  description: "Replaces every l with r.",
  run: (value) => String(value).split("l").join("r"),
});
