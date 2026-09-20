'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3446",
  name: "Replace \"Q\" with \"h\"",
  description: "Replaces every Q with h.",
  run: (value) => String(value).split("Q").join("h"),
});
