'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0454",
  name: "Truncate to 63",
  description: "Keeps the first 63 characters.",
  run: (value) => String(value).slice(0, 63),
});
