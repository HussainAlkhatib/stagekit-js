'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1580",
  name: "Replace \"l\" with \"H\"",
  description: "Replaces every l with H.",
  run: (value) => String(value).split("l").join("H"),
});
