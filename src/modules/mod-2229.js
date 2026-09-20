'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2229",
  name: "Replace \"w\" with \"k\"",
  description: "Replaces every w with k.",
  run: (value) => String(value).split("w").join("k"),
});
