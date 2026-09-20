'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0506",
  name: "Truncate to 76",
  description: "Keeps the first 76 characters.",
  run: (value) => String(value).slice(0, 76),
});
