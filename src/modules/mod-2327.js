'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2327",
  name: "Replace \"x\" with \"W\"",
  description: "Replaces every x with W.",
  run: (value) => String(value).split("x").join("W"),
});
