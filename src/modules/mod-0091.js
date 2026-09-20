'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0091",
  name: "Truncate to 6",
  description: "Keeps the first 6 characters.",
  run: (value) => String(value).slice(0, 6),
});
