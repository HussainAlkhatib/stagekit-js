'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0276",
  name: "Truncate to 24",
  description: "Keeps the first 24 characters.",
  run: (value) => String(value).slice(0, 24),
});
