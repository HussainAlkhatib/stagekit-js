'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4214",
  name: "Replace \"2\" with \"R\"",
  description: "Replaces every 2 with R.",
  run: (value) => String(value).split("2").join("R"),
});
