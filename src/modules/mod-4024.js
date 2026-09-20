'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4024",
  name: "Replace \"Z\" with \"K\"",
  description: "Replaces every Z with K.",
  run: (value) => String(value).split("Z").join("K"),
});
