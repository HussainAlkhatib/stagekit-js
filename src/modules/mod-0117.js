'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0117",
  name: "URI decode",
  description: "Decodes a percent-encoded value.",
  run: (value) => decodeURIComponent(String(value)),
});
