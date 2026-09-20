'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3492",
  name: "Replace \"Q\" with \"2\"",
  description: "Replaces every Q with 2.",
  run: (value) => String(value).split("Q").join("2"),
});
