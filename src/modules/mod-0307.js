'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0307",
  name: "Truncate to 30",
  description: "Keeps the first 30 characters.",
  run: (value) => String(value).slice(0, 30),
});
