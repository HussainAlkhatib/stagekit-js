'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2078",
  name: "Replace \"t\" with \"R\"",
  description: "Replaces every t with R.",
  run: (value) => String(value).split("t").join("R"),
});
