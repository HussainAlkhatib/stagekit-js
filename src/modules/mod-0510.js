'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0510",
  name: "Truncate to 77",
  description: "Keeps the first 77 characters.",
  run: (value) => String(value).slice(0, 77),
});
