'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0108",
  name: "Truncate to 7",
  description: "Keeps the first 7 characters.",
  run: (value) => String(value).slice(0, 7),
});
