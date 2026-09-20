'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0426",
  name: "Truncate to 56",
  description: "Keeps the first 56 characters.",
  run: (value) => String(value).slice(0, 56),
});
