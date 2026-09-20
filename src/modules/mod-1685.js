'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1685",
  name: "Replace \"n\" with \"q\"",
  description: "Replaces every n with q.",
  run: (value) => String(value).split("n").join("q"),
});
