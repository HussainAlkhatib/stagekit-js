'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2582",
  name: "Replace \"B\" with \"7\"",
  description: "Replaces every B with 7.",
  run: (value) => String(value).split("B").join("7"),
});
