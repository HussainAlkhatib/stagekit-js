'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4524",
  name: "Replace \"7\" with \"W\"",
  description: "Replaces every 7 with W.",
  run: (value) => String(value).split("7").join("W"),
});
