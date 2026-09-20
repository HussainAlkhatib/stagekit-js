'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4509",
  name: "Replace \"7\" with \"H\"",
  description: "Replaces every 7 with H.",
  run: (value) => String(value).split("7").join("H"),
});
