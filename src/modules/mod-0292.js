'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0292",
  name: "Truncate to 27",
  description: "Keeps the first 27 characters.",
  run: (value) => String(value).slice(0, 27),
});
