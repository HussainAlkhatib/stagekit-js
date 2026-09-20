'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4060",
  name: "Replace \"0\" with \"l\"",
  description: "Replaces every 0 with l.",
  run: (value) => String(value).split("0").join("l"),
});
