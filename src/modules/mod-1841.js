'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1841",
  name: "Replace \"p\" with \"Y\"",
  description: "Replaces every p with Y.",
  run: (value) => String(value).split("p").join("Y"),
});
