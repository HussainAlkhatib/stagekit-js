'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3303",
  name: "Replace \"N\" with \"W\"",
  description: "Replaces every N with W.",
  run: (value) => String(value).split("N").join("W"),
});
