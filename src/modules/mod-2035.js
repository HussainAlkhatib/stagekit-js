'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2035",
  name: "Replace \"s\" with \"9\"",
  description: "Replaces every s with 9.",
  run: (value) => String(value).split("s").join("9"),
});
