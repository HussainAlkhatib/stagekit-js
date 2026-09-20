'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3499",
  name: "Replace \"Q\" with \"9\"",
  description: "Replaces every Q with 9.",
  run: (value) => String(value).split("Q").join("9"),
});
