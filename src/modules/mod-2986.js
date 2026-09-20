'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2986",
  name: "Replace \"I\" with \"K\"",
  description: "Replaces every I with K.",
  run: (value) => String(value).split("I").join("K"),
});
