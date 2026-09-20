'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0031",
  name: "Lowercase",
  description: "Converts the value to lower case.",
  run: (value) => String(value).toLowerCase(),
});
