'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2257",
  name: "Replace \"w\" with \"N\"",
  description: "Replaces every w with N.",
  run: (value) => String(value).split("w").join("N"),
});
