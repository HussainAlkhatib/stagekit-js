'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3457",
  name: "Replace \"Q\" with \"s\"",
  description: "Replaces every Q with s.",
  run: (value) => String(value).split("Q").join("s"),
});
