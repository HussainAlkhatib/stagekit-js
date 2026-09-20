'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0502",
  name: "Truncate to 75",
  description: "Keeps the first 75 characters.",
  run: (value) => String(value).slice(0, 75),
});
