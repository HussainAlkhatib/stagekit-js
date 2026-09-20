'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0312",
  name: "Truncate to 31",
  description: "Keeps the first 31 characters.",
  run: (value) => String(value).slice(0, 31),
});
