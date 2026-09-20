'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1361",
  name: "Replace \"h\" with \"6\"",
  description: "Replaces every h with 6.",
  run: (value) => String(value).split("h").join("6"),
});
