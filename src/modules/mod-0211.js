'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0211",
  name: "Truncate to 16",
  description: "Keeps the first 16 characters.",
  run: (value) => String(value).slice(0, 16),
});
