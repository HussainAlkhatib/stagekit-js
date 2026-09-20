'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3482",
  name: "Replace \"Q\" with \"S\"",
  description: "Replaces every Q with S.",
  run: (value) => String(value).split("Q").join("S"),
});
