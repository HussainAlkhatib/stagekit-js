'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1812",
  name: "Replace \"p\" with \"v\"",
  description: "Replaces every p with v.",
  run: (value) => String(value).split("p").join("v"),
});
