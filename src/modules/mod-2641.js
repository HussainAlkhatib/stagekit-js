'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2641",
  name: "Replace \"C\" with \"5\"",
  description: "Replaces every C with 5.",
  run: (value) => String(value).split("C").join("5"),
});
