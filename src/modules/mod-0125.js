'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0125",
  name: "Truncate to 8",
  description: "Keeps the first 8 characters.",
  run: (value) => String(value).slice(0, 8),
});
