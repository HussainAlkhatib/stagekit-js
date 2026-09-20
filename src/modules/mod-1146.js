'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1146",
  name: "Replace \"e\" with \"S\"",
  description: "Replaces every e with S.",
  run: (value) => String(value).split("e").join("S"),
});
