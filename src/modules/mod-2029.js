'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2029",
  name: "Replace \"s\" with \"3\"",
  description: "Replaces every s with 3.",
  run: (value) => String(value).split("s").join("3"),
});
