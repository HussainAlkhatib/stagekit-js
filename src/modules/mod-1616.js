'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1616",
  name: "Replace \"m\" with \"h\"",
  description: "Replaces every m with h.",
  run: (value) => String(value).split("m").join("h"),
});
