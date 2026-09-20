'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2074",
  name: "Replace \"t\" with \"N\"",
  description: "Replaces every t with N.",
  run: (value) => String(value).split("t").join("N"),
});
