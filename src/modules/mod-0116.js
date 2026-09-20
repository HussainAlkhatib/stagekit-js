'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0116",
  name: "Snake case",
  description: "Converts the value to snake_case.",
  run: (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, ''),
});
