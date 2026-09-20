'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0414",
  name: "Truncate to 53",
  description: "Keeps the first 53 characters.",
  run: (value) => String(value).slice(0, 53),
});
