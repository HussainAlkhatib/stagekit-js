'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3780",
  name: "Replace \"V\" with \"K\"",
  description: "Replaces every V with K.",
  run: (value) => String(value).split("V").join("K"),
});
