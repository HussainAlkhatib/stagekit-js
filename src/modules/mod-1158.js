'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1158",
  name: "Replace \"e\" with \"W\"",
  description: "Replaces every e with W.",
  run: (value) => String(value).split("e").join("W"),
});
