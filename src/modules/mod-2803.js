'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2803",
  name: "Replace \"F\" with \"K\"",
  description: "Replaces every F with K.",
  run: (value) => String(value).split("F").join("K"),
});
