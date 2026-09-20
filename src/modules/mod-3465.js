'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3465",
  name: "Replace \"Q\" with \"A\"",
  description: "Replaces every Q with A.",
  run: (value) => String(value).split("Q").join("A"),
});
