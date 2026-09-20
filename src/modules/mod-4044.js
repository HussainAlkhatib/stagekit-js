'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4044",
  name: "Replace \"Z\" with \"5\"",
  description: "Replaces every Z with 5.",
  run: (value) => String(value).split("Z").join("5"),
});
