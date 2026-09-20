'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0174",
  name: "Truncate to 12",
  description: "Keeps the first 12 characters.",
  run: (value) => String(value).slice(0, 12),
});
