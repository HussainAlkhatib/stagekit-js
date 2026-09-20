'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3496",
  name: "Replace \"Q\" with \"6\"",
  description: "Replaces every Q with 6.",
  run: (value) => String(value).split("Q").join("6"),
});
