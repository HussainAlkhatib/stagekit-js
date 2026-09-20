'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0337",
  name: "Truncate to 36",
  description: "Keeps the first 36 characters.",
  run: (value) => String(value).slice(0, 36),
});
