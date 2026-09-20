'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4426",
  name: "Replace \"6\" with \"l\"",
  description: "Replaces every 6 with l.",
  run: (value) => String(value).split("6").join("l"),
});
