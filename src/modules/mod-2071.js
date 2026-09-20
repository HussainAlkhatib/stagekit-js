'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2071",
  name: "Replace \"t\" with \"K\"",
  description: "Replaces every t with K.",
  run: (value) => String(value).split("t").join("K"),
});
