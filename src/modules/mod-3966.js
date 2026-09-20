'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3966",
  name: "Replace \"Y\" with \"N\"",
  description: "Replaces every Y with N.",
  run: (value) => String(value).split("Y").join("N"),
});
