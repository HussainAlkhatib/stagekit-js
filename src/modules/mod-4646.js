'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4646",
  name: "Replace \"9\" with \"W\"",
  description: "Replaces every 9 with W.",
  run: (value) => String(value).split("9").join("W"),
});
