'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3753",
  name: "Replace \"V\" with \"j\"",
  description: "Replaces every V with j.",
  run: (value) => String(value).split("V").join("j"),
});
