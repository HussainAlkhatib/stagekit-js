'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0322",
  name: "Truncate to 33",
  description: "Keeps the first 33 characters.",
  run: (value) => String(value).slice(0, 33),
});
