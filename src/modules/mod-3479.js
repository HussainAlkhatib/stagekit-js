'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3479",
  name: "Replace \"Q\" with \"O\"",
  description: "Replaces every Q with O.",
  run: (value) => String(value).split("Q").join("O"),
});
