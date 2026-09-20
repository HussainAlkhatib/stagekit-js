'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0795",
  name: "Replace \"c\" with \"X\"",
  description: "Replaces every c with X.",
  run: (value) => String(value).split("c").join("X"),
});
