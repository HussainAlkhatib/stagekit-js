'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0458",
  name: "Truncate to 64",
  description: "Keeps the first 64 characters.",
  run: (value) => String(value).slice(0, 64),
});
