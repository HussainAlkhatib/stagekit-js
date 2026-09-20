'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2028",
  name: "Replace \"s\" with \"2\"",
  description: "Replaces every s with 2.",
  run: (value) => String(value).split("s").join("2"),
});
