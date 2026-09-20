'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3848",
  name: "Replace \"W\" with \"R\"",
  description: "Replaces every W with R.",
  run: (value) => String(value).split("W").join("R"),
});
