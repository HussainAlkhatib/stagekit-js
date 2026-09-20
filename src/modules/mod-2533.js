'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2533",
  name: "Replace \"B\" with \"j\"",
  description: "Replaces every B with j.",
  run: (value) => String(value).split("B").join("j"),
});
