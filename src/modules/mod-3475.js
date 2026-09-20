'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3475",
  name: "Replace \"Q\" with \"K\"",
  description: "Replaces every Q with K.",
  run: (value) => String(value).split("Q").join("K"),
});
