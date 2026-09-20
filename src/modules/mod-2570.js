'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2570",
  name: "Replace \"B\" with \"V\"",
  description: "Replaces every B with V.",
  run: (value) => String(value).split("B").join("V"),
});
