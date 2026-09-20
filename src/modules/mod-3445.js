'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3445",
  name: "Replace \"Q\" with \"g\"",
  description: "Replaces every Q with g.",
  run: (value) => String(value).split("Q").join("g"),
});
