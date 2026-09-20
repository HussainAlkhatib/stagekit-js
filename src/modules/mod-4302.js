'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4302",
  name: "Replace \"4\" with \"j\"",
  description: "Replaces every 4 with j.",
  run: (value) => String(value).split("4").join("j"),
});
