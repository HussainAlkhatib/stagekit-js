'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2066",
  name: "Replace \"t\" with \"F\"",
  description: "Replaces every t with F.",
  run: (value) => String(value).split("t").join("F"),
});
