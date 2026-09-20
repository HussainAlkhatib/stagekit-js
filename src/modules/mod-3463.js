'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3463",
  name: "Replace \"Q\" with \"y\"",
  description: "Replaces every Q with y.",
  run: (value) => String(value).split("Q").join("y"),
});
