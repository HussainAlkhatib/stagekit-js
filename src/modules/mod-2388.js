'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2388",
  name: "Replace \"y\" with \"W\"",
  description: "Replaces every y with W.",
  run: (value) => String(value).split("y").join("W"),
});
