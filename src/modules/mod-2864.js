'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2864",
  name: "Replace \"G\" with \"K\"",
  description: "Replaces every G with K.",
  run: (value) => String(value).split("G").join("K"),
});
