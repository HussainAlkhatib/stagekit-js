'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4546",
  name: "Replace \"8\" with \"j\"",
  description: "Replaces every 8 with j.",
  run: (value) => String(value).split("8").join("j"),
});
