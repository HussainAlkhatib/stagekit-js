'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0347",
  name: "Truncate to 38",
  description: "Keeps the first 38 characters.",
  run: (value) => String(value).slice(0, 38),
});
