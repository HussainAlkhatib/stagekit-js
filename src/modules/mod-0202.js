'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0202",
  name: "Truncate to 15",
  description: "Keeps the first 15 characters.",
  run: (value) => String(value).slice(0, 15),
});
