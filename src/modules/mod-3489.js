'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3489",
  name: "Replace \"Q\" with \"Z\"",
  description: "Replaces every Q with Z.",
  run: (value) => String(value).split("Q").join("Z"),
});
