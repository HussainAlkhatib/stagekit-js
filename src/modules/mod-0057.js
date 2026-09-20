'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0057",
  name: "Truncate to 4",
  description: "Keeps the first 4 characters.",
  run: (value) => String(value).slice(0, 4),
});
