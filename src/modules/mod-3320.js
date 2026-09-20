'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3320",
  name: "Replace \"O\" with \"d\"",
  description: "Replaces every O with d.",
  run: (value) => String(value).split("O").join("d"),
});
