'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3472",
  name: "Replace \"Q\" with \"H\"",
  description: "Replaces every Q with H.",
  run: (value) => String(value).split("Q").join("H"),
});
