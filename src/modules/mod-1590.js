'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1590",
  name: "Replace \"l\" with \"R\"",
  description: "Replaces every l with R.",
  run: (value) => String(value).split("l").join("R"),
});
