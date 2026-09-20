'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4093",
  name: "Replace \"0\" with \"S\"",
  description: "Replaces every 0 with S.",
  run: (value) => String(value).split("0").join("S"),
});
