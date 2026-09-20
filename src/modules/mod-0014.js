'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0014",
  name: "Uppercase",
  description: "Converts the value to upper case.",
  run: (value) => String(value).toUpperCase(),
});
