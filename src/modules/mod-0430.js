'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0430",
  name: "Truncate to 57",
  description: "Keeps the first 57 characters.",
  run: (value) => String(value).slice(0, 57),
});
