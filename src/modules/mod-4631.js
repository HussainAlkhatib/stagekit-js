'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4631",
  name: "Replace \"9\" with \"H\"",
  description: "Replaces every 9 with H.",
  run: (value) => String(value).split("9").join("H"),
});
