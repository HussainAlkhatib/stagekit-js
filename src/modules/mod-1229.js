'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1229",
  name: "Replace \"f\" with \"W\"",
  description: "Replaces every f with W.",
  run: (value) => String(value).split("f").join("W"),
});
