'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3547",
  name: "Replace \"R\" with \"W\"",
  description: "Replaces every R with W.",
  run: (value) => String(value).split("R").join("W"),
});
