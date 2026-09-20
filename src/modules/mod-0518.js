'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0518",
  name: "Truncate to 79",
  description: "Keeps the first 79 characters.",
  run: (value) => String(value).slice(0, 79),
});
