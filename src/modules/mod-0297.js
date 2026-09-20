'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0297",
  name: "Truncate to 28",
  description: "Keeps the first 28 characters.",
  run: (value) => String(value).slice(0, 28),
});
