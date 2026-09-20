'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3454",
  name: "Replace \"Q\" with \"p\"",
  description: "Replaces every Q with p.",
  run: (value) => String(value).split("Q").join("p"),
});
