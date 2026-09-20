'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4019",
  name: "Replace \"Z\" with \"F\"",
  description: "Replaces every Z with F.",
  run: (value) => String(value).split("Z").join("F"),
});
