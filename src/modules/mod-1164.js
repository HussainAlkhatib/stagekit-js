'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1164",
  name: "Replace \"e\" with \"Y\"",
  description: "Replaces every e with Y.",
  run: (value) => String(value).split("e").join("Y"),
});
