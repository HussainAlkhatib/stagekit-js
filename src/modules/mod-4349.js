'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4349",
  name: "Replace \"4\" with \"5\"",
  description: "Replaces every 4 with 5.",
  run: (value) => String(value).split("4").join("5"),
});
