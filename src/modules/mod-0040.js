'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0040",
  name: "Truncate to 3",
  description: "Keeps the first 3 characters.",
  run: (value) => String(value).slice(0, 3),
});
