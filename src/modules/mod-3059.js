'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3059",
  name: "Replace \"J\" with \"W\"",
  description: "Replaces every J with W.",
  run: (value) => String(value).split("J").join("W"),
});
