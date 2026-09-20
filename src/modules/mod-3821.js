'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3821",
  name: "Replace \"W\" with \"q\"",
  description: "Replaces every W with q.",
  run: (value) => String(value).split("W").join("q"),
});
