'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1849",
  name: "Replace \"p\" with \"6\"",
  description: "Replaces every p with 6.",
  run: (value) => String(value).split("p").join("6"),
});
