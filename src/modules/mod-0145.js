'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0145",
  name: "Title case",
  description: "Capitalizes the first letter of every word.",
  run: (value) => String(value).toLowerCase().replace(/(^|[^a-z0-9])([a-z0-9])/g, (m, a, b) => a + b.toUpperCase()),
});
