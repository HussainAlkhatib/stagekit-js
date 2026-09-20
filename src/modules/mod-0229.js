'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0229",
  name: "Truncate to 18",
  description: "Keeps the first 18 characters.",
  run: (value) => String(value).slice(0, 18),
});
