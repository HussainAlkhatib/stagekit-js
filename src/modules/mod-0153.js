'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0153",
  name: "Truncate to 10",
  description: "Keeps the first 10 characters.",
  run: (value) => String(value).slice(0, 10),
});
