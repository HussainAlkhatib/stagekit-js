'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2742",
  name: "Replace \"E\" with \"K\"",
  description: "Replaces every E with K.",
  run: (value) => String(value).split("E").join("K"),
});
