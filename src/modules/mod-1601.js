'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1601",
  name: "Replace \"l\" with \"2\"",
  description: "Replaces every l with 2.",
  run: (value) => String(value).split("l").join("2"),
});
