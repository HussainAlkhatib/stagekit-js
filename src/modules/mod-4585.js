'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4585",
  name: "Replace \"8\" with \"W\"",
  description: "Replaces every 8 with W.",
  run: (value) => String(value).split("8").join("W"),
});
