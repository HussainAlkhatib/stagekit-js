'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0422",
  name: "Truncate to 55",
  description: "Keeps the first 55 characters.",
  run: (value) => String(value).slice(0, 55),
});
