'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0332",
  name: "Truncate to 35",
  description: "Keeps the first 35 characters.",
  run: (value) => String(value).slice(0, 35),
});
