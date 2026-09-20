'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0486",
  name: "Truncate to 71",
  description: "Keeps the first 71 characters.",
  run: (value) => String(value).slice(0, 71),
});
