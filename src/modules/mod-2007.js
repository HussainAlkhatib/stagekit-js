'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2007",
  name: "Replace \"s\" with \"H\"",
  description: "Replaces every s with H.",
  run: (value) => String(value).split("s").join("H"),
});
