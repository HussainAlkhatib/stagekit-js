'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3617",
  name: "Replace \"S\" with \"5\"",
  description: "Replaces every S with 5.",
  run: (value) => String(value).split("S").join("5"),
});
