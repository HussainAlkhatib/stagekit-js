'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3494",
  name: "Replace \"Q\" with \"4\"",
  description: "Replaces every Q with 4.",
  run: (value) => String(value).split("Q").join("4"),
});
