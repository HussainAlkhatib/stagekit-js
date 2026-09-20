'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3882",
  name: "Replace \"X\" with \"q\"",
  description: "Replaces every X with q.",
  run: (value) => String(value).split("X").join("q"),
});
