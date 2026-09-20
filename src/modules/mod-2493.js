'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2493",
  name: "Replace \"A\" with \"F\"",
  description: "Replaces every A with F.",
  run: (value) => String(value).split("A").join("F"),
});
