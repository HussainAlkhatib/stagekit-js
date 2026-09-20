'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1059",
  name: "Replace \"e\" with \"p\"",
  description: "Replaces every e with p.",
  run: (value) => String(value).split("e").join("p"),
});
