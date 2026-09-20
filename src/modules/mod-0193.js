'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0193",
  name: "Truncate to 14",
  description: "Keeps the first 14 characters.",
  run: (value) => String(value).slice(0, 14),
});
