'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4031",
  name: "Replace \"Z\" with \"R\"",
  description: "Replaces every Z with R.",
  run: (value) => String(value).split("Z").join("R"),
});
