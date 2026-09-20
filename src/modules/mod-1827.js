'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1827",
  name: "Replace \"p\" with \"K\"",
  description: "Replaces every p with K.",
  run: (value) => String(value).split("p").join("K"),
});
