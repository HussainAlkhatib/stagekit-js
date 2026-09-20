'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0164",
  name: "Truncate to 11",
  description: "Keeps the first 11 characters.",
  run: (value) => String(value).slice(0, 11),
});
