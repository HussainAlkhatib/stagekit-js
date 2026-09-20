'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0219",
  name: "Suffix \"@\"",
  description: "Appends \"@\" to the value.",
  run: (value) => String(value) + "@",
});
