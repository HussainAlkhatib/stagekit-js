'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3963",
  name: "Replace \"Y\" with \"K\"",
  description: "Replaces every Y with K.",
  run: (value) => String(value).split("Y").join("K"),
});
