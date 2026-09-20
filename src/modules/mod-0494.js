'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0494",
  name: "Truncate to 73",
  description: "Keeps the first 73 characters.",
  run: (value) => String(value).slice(0, 73),
});
