'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4274",
  name: "Replace \"3\" with \"Q\"",
  description: "Replaces every 3 with Q.",
  run: (value) => String(value).split("3").join("Q"),
});
