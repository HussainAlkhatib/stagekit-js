'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1225",
  name: "Replace \"f\" with \"S\"",
  description: "Replaces every f with S.",
  run: (value) => String(value).split("f").join("S"),
});
