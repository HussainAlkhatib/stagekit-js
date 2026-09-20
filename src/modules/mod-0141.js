'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0141",
  name: "Truncate to 9",
  description: "Keeps the first 9 characters.",
  run: (value) => String(value).slice(0, 9),
});
