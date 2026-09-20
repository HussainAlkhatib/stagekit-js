'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0514",
  name: "Truncate to 78",
  description: "Keeps the first 78 characters.",
  run: (value) => String(value).slice(0, 78),
});
