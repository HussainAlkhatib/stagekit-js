'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1624",
  name: "Replace \"m\" with \"q\"",
  description: "Replaces every m with q.",
  run: (value) => String(value).split("m").join("q"),
});
