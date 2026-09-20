'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0362",
  name: "Truncate to 41",
  description: "Keeps the first 41 characters.",
  run: (value) => String(value).slice(0, 41),
});
