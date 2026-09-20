'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0352",
  name: "Truncate to 39",
  description: "Keeps the first 39 characters.",
  run: (value) => String(value).slice(0, 39),
});
