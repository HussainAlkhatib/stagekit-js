'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0462",
  name: "Truncate to 65",
  description: "Keeps the first 65 characters.",
  run: (value) => String(value).slice(0, 65),
});
