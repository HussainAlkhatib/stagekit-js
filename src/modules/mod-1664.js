'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1664",
  name: "Replace \"m\" with \"4\"",
  description: "Replaces every m with 4.",
  run: (value) => String(value).split("m").join("4"),
});
