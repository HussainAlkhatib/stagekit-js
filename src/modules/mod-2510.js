'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2510",
  name: "Replace \"A\" with \"W\"",
  description: "Replaces every A with W.",
  run: (value) => String(value).split("A").join("W"),
});
