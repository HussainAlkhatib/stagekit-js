'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0418",
  name: "Truncate to 54",
  description: "Keeps the first 54 characters.",
  run: (value) => String(value).slice(0, 54),
});
