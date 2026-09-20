'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0390",
  name: "Truncate to 47",
  description: "Keeps the first 47 characters.",
  run: (value) => String(value).slice(0, 47),
});
