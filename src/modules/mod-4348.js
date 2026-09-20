'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4348",
  name: "Replace \"4\" with \"3\"",
  description: "Replaces every 4 with 3.",
  run: (value) => String(value).split("4").join("3"),
});
