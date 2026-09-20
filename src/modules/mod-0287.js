'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0287",
  name: "Truncate to 26",
  description: "Keeps the first 26 characters.",
  run: (value) => String(value).slice(0, 26),
});
