'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0522",
  name: "Truncate to 80",
  description: "Keeps the first 80 characters.",
  run: (value) => String(value).slice(0, 80),
});
