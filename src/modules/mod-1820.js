'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1820",
  name: "Replace \"p\" with \"D\"",
  description: "Replaces every p with D.",
  run: (value) => String(value).split("p").join("D"),
});
