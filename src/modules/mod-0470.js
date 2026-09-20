'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0470",
  name: "Truncate to 67",
  description: "Keeps the first 67 characters.",
  run: (value) => String(value).slice(0, 67),
});
