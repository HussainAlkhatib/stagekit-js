'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4271",
  name: "Replace \"3\" with \"N\"",
  description: "Replaces every 3 with N.",
  run: (value) => String(value).split("3").join("N"),
});
