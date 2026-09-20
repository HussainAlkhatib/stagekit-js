'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2542",
  name: "Replace \"B\" with \"s\"",
  description: "Replaces every B with s.",
  run: (value) => String(value).split("B").join("s"),
});
