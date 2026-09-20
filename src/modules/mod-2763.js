'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2763",
  name: "Replace \"E\" with \"5\"",
  description: "Replaces every E with 5.",
  run: (value) => String(value).split("E").join("5"),
});
