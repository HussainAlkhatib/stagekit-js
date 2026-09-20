'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0088",
  name: "Prefix \".\"",
  description: "Prepends \".\" to the value.",
  run: (value) => "." + String(value),
});
