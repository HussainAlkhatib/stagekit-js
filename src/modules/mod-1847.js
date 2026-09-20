'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1847",
  name: "Replace \"p\" with \"4\"",
  description: "Replaces every p with 4.",
  run: (value) => String(value).split("p").join("4"),
});
