'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2925",
  name: "Replace \"H\" with \"K\"",
  description: "Replaces every H with K.",
  run: (value) => String(value).split("H").join("K"),
});
