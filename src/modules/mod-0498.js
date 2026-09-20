'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0498",
  name: "Truncate to 74",
  description: "Keeps the first 74 characters.",
  run: (value) => String(value).slice(0, 74),
});
