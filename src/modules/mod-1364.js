'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1364",
  name: "Replace \"h\" with \"9\"",
  description: "Replaces every h with 9.",
  run: (value) => String(value).split("h").join("9"),
});
