'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3455",
  name: "Replace \"Q\" with \"q\"",
  description: "Replaces every Q with q.",
  run: (value) => String(value).split("Q").join("q"),
});
