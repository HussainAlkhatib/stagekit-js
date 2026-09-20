'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2555",
  name: "Replace \"B\" with \"G\"",
  description: "Replaces every B with G.",
  run: (value) => String(value).split("B").join("G"),
});
