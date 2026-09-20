'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4451",
  name: "Replace \"6\" with \"K\"",
  description: "Replaces every 6 with K.",
  run: (value) => String(value).split("6").join("K"),
});
