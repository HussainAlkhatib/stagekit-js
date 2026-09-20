'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3851",
  name: "Replace \"W\" with \"U\"",
  description: "Replaces every W with U.",
  run: (value) => String(value).split("W").join("U"),
});
