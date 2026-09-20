'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0327",
  name: "Truncate to 34",
  description: "Keeps the first 34 characters.",
  run: (value) => String(value).slice(0, 34),
});
