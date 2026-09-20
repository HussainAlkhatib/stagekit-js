'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0386",
  name: "Truncate to 46",
  description: "Keeps the first 46 characters.",
  run: (value) => String(value).slice(0, 46),
});
