'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1801",
  name: "Replace \"p\" with \"j\"",
  description: "Replaces every p with j.",
  run: (value) => String(value).split("p").join("j"),
});
