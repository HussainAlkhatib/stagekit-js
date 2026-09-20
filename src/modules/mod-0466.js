'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0466",
  name: "Truncate to 66",
  description: "Keeps the first 66 characters.",
  run: (value) => String(value).slice(0, 66),
});
