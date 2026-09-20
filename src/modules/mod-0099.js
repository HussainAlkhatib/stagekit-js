'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0099",
  name: "Camel case",
  description: "Converts the value to camelCase.",
  run: (value) => String(value).toLowerCase().replace(/[^a-z0-9]+(.)/g, (m, c) => c.toUpperCase()),
});
