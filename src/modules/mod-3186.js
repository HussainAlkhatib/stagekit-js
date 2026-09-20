'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3186",
  name: "Replace \"L\" with \"1\"",
  description: "Replaces every L with 1.",
  run: (value) => String(value).split("L").join("1"),
});
