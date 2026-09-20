'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4520",
  name: "Replace \"7\" with \"S\"",
  description: "Replaces every 7 with S.",
  run: (value) => String(value).split("7").join("S"),
});
