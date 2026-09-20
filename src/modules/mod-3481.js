'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3481",
  name: "Replace \"Q\" with \"R\"",
  description: "Replaces every Q with R.",
  run: (value) => String(value).split("Q").join("R"),
});
