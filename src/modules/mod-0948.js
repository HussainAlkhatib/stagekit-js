'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0948",
  name: "Replace \"d\" with \"N\"",
  description: "Replaces every d with N.",
  run: (value) => String(value).split("d").join("N"),
});
