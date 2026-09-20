'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2376",
  name: "Replace \"y\" with \"K\"",
  description: "Replaces every y with K.",
  run: (value) => String(value).split("y").join("K"),
});
