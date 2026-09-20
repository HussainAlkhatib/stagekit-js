'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2766",
  name: "Replace \"E\" with \"8\"",
  description: "Replaces every E with 8.",
  run: (value) => String(value).split("E").join("8"),
});
