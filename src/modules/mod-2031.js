'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2031",
  name: "Replace \"s\" with \"5\"",
  description: "Replaces every s with 5.",
  run: (value) => String(value).split("s").join("5"),
});
