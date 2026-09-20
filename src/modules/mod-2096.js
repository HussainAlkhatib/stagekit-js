'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2096",
  name: "Replace \"t\" with \"9\"",
  description: "Replaces every t with 9.",
  run: (value) => String(value).split("t").join("9"),
});
