'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4548",
  name: "Replace \"8\" with \"l\"",
  description: "Replaces every 8 with l.",
  run: (value) => String(value).split("8").join("l"),
});
