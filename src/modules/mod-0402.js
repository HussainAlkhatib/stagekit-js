'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0402",
  name: "Truncate to 50",
  description: "Keeps the first 50 characters.",
  run: (value) => String(value).slice(0, 50),
});
