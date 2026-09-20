'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4154",
  name: "Replace \"1\" with \"S\"",
  description: "Replaces every 1 with S.",
  run: (value) => String(value).split("1").join("S"),
});
