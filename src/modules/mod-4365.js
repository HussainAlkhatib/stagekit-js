'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4365",
  name: "Replace \"5\" with \"l\"",
  description: "Replaces every 5 with l.",
  run: (value) => String(value).split("5").join("l"),
});
