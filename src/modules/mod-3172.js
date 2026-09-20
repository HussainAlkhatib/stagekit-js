'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3172",
  name: "Replace \"L\" with \"N\"",
  description: "Replaces every L with N.",
  run: (value) => String(value).split("L").join("N"),
});
