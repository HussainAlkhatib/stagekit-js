'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4363",
  name: "Replace \"5\" with \"j\"",
  description: "Replaces every 5 with j.",
  run: (value) => String(value).split("5").join("j"),
});
