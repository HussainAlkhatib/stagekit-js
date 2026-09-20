'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2767",
  name: "Replace \"E\" with \"9\"",
  description: "Replaces every E with 9.",
  run: (value) => String(value).split("E").join("9"),
});
