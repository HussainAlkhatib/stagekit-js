'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2557",
  name: "Replace \"B\" with \"I\"",
  description: "Replaces every B with I.",
  run: (value) => String(value).split("B").join("I"),
});
