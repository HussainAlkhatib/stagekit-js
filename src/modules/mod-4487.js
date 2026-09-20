'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4487",
  name: "Replace \"7\" with \"l\"",
  description: "Replaces every 7 with l.",
  run: (value) => String(value).split("7").join("l"),
});
