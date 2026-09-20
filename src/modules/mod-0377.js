'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0377",
  name: "Truncate to 44",
  description: "Keeps the first 44 characters.",
  run: (value) => String(value).slice(0, 44),
});
