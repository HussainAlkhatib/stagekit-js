'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2558",
  name: "Replace \"B\" with \"J\"",
  description: "Replaces every B with J.",
  run: (value) => String(value).split("B").join("J"),
});
