'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0023",
  name: "Truncate to 2",
  description: "Keeps the first 2 characters.",
  run: (value) => String(value).slice(0, 2),
});
