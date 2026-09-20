'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4275",
  name: "Replace \"3\" with \"R\"",
  description: "Replaces every 3 with R.",
  run: (value) => String(value).split("3").join("R"),
});
