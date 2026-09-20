'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1963",
  name: "Replace \"r\" with \"Y\"",
  description: "Replaces every r with Y.",
  run: (value) => String(value).split("r").join("Y"),
});
