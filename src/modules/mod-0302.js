'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0302",
  name: "Truncate to 29",
  description: "Keeps the first 29 characters.",
  run: (value) => String(value).slice(0, 29),
});
