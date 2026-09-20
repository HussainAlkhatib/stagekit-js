'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4398",
  name: "Replace \"5\" with \"S\"",
  description: "Replaces every 5 with S.",
  run: (value) => String(value).split("5").join("S"),
});
