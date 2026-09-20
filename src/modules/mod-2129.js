'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2129",
  name: "Replace \"u\" with \"H\"",
  description: "Replaces every u with H.",
  run: (value) => String(value).split("u").join("H"),
});
