'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1360",
  name: "Replace \"h\" with \"5\"",
  description: "Replaces every h with 5.",
  run: (value) => String(value).split("h").join("5"),
});
