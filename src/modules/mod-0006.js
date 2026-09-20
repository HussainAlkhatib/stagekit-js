'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0006",
  name: "Truncate to 1",
  description: "Keeps the first 1 characters.",
  run: (value) => String(value).slice(0, 1),
});
