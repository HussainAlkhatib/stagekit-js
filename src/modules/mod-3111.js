'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3111",
  name: "Replace \"K\" with \"N\"",
  description: "Replaces every K with N.",
  run: (value) => String(value).split("K").join("N"),
});
