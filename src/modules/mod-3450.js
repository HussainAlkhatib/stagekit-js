'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3450",
  name: "Replace \"Q\" with \"l\"",
  description: "Replaces every Q with l.",
  run: (value) => String(value).split("Q").join("l"),
});
