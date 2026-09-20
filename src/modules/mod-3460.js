'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3460",
  name: "Replace \"Q\" with \"v\"",
  description: "Replaces every Q with v.",
  run: (value) => String(value).split("Q").join("v"),
});
