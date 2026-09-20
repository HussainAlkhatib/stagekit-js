'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3449",
  name: "Replace \"Q\" with \"k\"",
  description: "Replaces every Q with k.",
  run: (value) => String(value).split("Q").join("k"),
});
