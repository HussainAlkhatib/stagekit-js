'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1238",
  name: "Replace \"f\" with \"5\"",
  description: "Replaces every f with 5.",
  run: (value) => String(value).split("f").join("5"),
});
