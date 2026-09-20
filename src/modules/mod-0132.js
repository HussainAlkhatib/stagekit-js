'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0132",
  name: "Kebab case",
  description: "Converts the value to kebab-case.",
  run: (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
});
