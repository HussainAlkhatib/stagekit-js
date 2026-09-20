'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4288",
  name: "Replace \"3\" with \"5\"",
  description: "Replaces every 3 with 5.",
  run: (value) => String(value).split("3").join("5"),
});
