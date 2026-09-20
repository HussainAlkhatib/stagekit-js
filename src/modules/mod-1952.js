'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1952",
  name: "Replace \"r\" with \"N\"",
  description: "Replaces every r with N.",
  run: (value) => String(value).split("r").join("N"),
});
