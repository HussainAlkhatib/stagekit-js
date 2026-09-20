'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0074",
  name: "Truncate to 5",
  description: "Keeps the first 5 characters.",
  run: (value) => String(value).slice(0, 5),
});
