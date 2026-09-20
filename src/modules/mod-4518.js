'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4518",
  name: "Replace \"7\" with \"Q\"",
  description: "Replaces every 7 with Q.",
  run: (value) => String(value).split("7").join("Q"),
});
