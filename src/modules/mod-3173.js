'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3173",
  name: "Replace \"L\" with \"O\"",
  description: "Replaces every L with O.",
  run: (value) => String(value).split("L").join("O"),
});
