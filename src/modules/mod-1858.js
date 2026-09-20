'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1858",
  name: "Replace \"q\" with \"f\"",
  description: "Replaces every q with f.",
  run: (value) => String(value).split("q").join("f"),
});
