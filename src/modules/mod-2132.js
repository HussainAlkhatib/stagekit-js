'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2132",
  name: "Replace \"u\" with \"K\"",
  description: "Replaces every u with K.",
  run: (value) => String(value).split("u").join("K"),
});
