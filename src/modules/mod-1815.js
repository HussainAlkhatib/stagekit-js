'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1815",
  name: "Replace \"p\" with \"y\"",
  description: "Replaces every p with y.",
  run: (value) => String(value).split("p").join("y"),
});
