'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0336",
  name: "Replace \"a\" with \"K\"",
  description: "Replaces every a with K.",
  run: (value) => String(value).split("a").join("K"),
});
