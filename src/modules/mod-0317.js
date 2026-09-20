'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0317",
  name: "Truncate to 32",
  description: "Keeps the first 32 characters.",
  run: (value) => String(value).slice(0, 32),
});
