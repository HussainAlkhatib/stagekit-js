'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0367",
  name: "Truncate to 42",
  description: "Keeps the first 42 characters.",
  run: (value) => String(value).slice(0, 42),
});
