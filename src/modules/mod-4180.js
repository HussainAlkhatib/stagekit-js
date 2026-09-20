'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4180",
  name: "Replace \"2\" with \"j\"",
  description: "Replaces every 2 with j.",
  run: (value) => String(value).split("2").join("j"),
});
