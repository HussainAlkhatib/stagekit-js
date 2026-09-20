'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1346",
  name: "Replace \"h\" with \"R\"",
  description: "Replaces every h with R.",
  run: (value) => String(value).split("h").join("R"),
});
