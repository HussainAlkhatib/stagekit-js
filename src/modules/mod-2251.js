'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2251",
  name: "Replace \"w\" with \"H\"",
  description: "Replaces every w with H.",
  run: (value) => String(value).split("w").join("H"),
});
