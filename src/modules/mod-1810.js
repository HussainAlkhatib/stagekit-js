'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1810",
  name: "Replace \"p\" with \"t\"",
  description: "Replaces every p with t.",
  run: (value) => String(value).split("p").join("t"),
});
