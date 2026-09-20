'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0490",
  name: "Truncate to 72",
  description: "Keeps the first 72 characters.",
  run: (value) => String(value).slice(0, 72),
});
