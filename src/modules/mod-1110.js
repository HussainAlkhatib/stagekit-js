'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1110",
  name: "Replace \"e\" with \"G\"",
  description: "Replaces every e with G.",
  run: (value) => String(value).split("e").join("G"),
});
