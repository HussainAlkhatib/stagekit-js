'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0100",
  name: "URI encode",
  description: "Percent-encodes the value.",
  run: (value) => encodeURIComponent(String(value)),
});
