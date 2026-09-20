'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2137",
  name: "Replace \"u\" with \"P\"",
  description: "Replaces every u with P.",
  run: (value) => String(value).split("u").join("P"),
});
