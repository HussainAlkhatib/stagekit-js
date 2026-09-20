'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1342",
  name: "Replace \"h\" with \"N\"",
  description: "Replaces every h with N.",
  run: (value) => String(value).split("h").join("N"),
});
