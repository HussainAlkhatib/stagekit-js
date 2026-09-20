'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0263",
  name: "Truncate to 22",
  description: "Keeps the first 22 characters.",
  run: (value) => String(value).slice(0, 22),
});
