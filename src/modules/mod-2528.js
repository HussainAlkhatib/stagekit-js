'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2528",
  name: "Replace \"B\" with \"e\"",
  description: "Replaces every B with e.",
  run: (value) => String(value).split("B").join("e"),
});
