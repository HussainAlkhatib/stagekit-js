'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2551",
  name: "Replace \"B\" with \"C\"",
  description: "Replaces every B with C.",
  run: (value) => String(value).split("B").join("C"),
});
