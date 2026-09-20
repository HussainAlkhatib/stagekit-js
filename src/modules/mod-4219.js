'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4219",
  name: "Replace \"2\" with \"W\"",
  description: "Replaces every 2 with W.",
  run: (value) => String(value).split("2").join("W"),
});
