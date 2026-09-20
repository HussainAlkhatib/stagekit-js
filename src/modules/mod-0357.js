'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0357",
  name: "Truncate to 40",
  description: "Keeps the first 40 characters.",
  run: (value) => String(value).slice(0, 40),
});
