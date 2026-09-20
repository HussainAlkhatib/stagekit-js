'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0406",
  name: "Truncate to 51",
  description: "Keeps the first 51 characters.",
  run: (value) => String(value).slice(0, 51),
});
