'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0398",
  name: "Truncate to 49",
  description: "Keeps the first 49 characters.",
  run: (value) => String(value).slice(0, 49),
});
