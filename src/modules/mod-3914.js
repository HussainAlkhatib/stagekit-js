'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3914",
  name: "Replace \"X\" with \"W\"",
  description: "Replaces every X with W.",
  run: (value) => String(value).split("X").join("W"),
});
