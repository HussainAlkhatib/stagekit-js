'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0247",
  name: "Truncate to 20",
  description: "Keeps the first 20 characters.",
  run: (value) => String(value).slice(0, 20),
});
