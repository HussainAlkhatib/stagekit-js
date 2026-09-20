'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4082",
  name: "Replace \"0\" with \"H\"",
  description: "Replaces every 0 with H.",
  run: (value) => String(value).split("0").join("H"),
});
