'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2262",
  name: "Replace \"w\" with \"S\"",
  description: "Replaces every w with S.",
  run: (value) => String(value).split("w").join("S"),
});
