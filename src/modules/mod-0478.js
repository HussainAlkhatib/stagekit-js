'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0478",
  name: "Truncate to 69",
  description: "Keeps the first 69 characters.",
  run: (value) => String(value).slice(0, 69),
});
