'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1224",
  name: "Replace \"f\" with \"R\"",
  description: "Replaces every f with R.",
  run: (value) => String(value).split("f").join("R"),
});
