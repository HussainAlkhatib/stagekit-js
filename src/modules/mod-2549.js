'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2549",
  name: "Replace \"B\" with \"z\"",
  description: "Replaces every B with z.",
  run: (value) => String(value).split("B").join("z"),
});
