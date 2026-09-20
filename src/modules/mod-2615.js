'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2615",
  name: "Replace \"C\" with \"F\"",
  description: "Replaces every C with F.",
  run: (value) => String(value).split("C").join("F"),
});
