'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3910",
  name: "Replace \"X\" with \"S\"",
  description: "Replaces every X with S.",
  run: (value) => String(value).split("X").join("S"),
});
