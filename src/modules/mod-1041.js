'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1041",
  name: "Replace \"e\" with \"j\"",
  description: "Replaces every e with j.",
  run: (value) => String(value).split("e").join("j"),
});
