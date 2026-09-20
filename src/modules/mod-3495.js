'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3495",
  name: "Replace \"Q\" with \"5\"",
  description: "Replaces every Q with 5.",
  run: (value) => String(value).split("Q").join("5"),
});
