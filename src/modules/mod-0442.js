'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0442",
  name: "Truncate to 60",
  description: "Keeps the first 60 characters.",
  run: (value) => String(value).slice(0, 60),
});
