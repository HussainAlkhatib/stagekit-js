'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3165",
  name: "Replace \"L\" with \"F\"",
  description: "Replaces every L with F.",
  run: (value) => String(value).split("L").join("F"),
});
