'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0450",
  name: "Truncate to 62",
  description: "Keeps the first 62 characters.",
  run: (value) => String(value).slice(0, 62),
});
