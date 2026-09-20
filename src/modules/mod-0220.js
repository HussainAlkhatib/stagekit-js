'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0220",
  name: "Truncate to 17",
  description: "Keeps the first 17 characters.",
  run: (value) => String(value).slice(0, 17),
});
