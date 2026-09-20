'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1175",
  name: "Replace \"e\" with \"3\"",
  description: "Replaces every e with 3.",
  run: (value) => String(value).split("e").join("3"),
});
