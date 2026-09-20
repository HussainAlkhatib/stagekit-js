'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3600",
  name: "Replace \"S\" with \"N\"",
  description: "Replaces every S with N.",
  run: (value) => String(value).split("S").join("N"),
});
