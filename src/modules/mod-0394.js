'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0394",
  name: "Truncate to 48",
  description: "Keeps the first 48 characters.",
  run: (value) => String(value).slice(0, 48),
});
