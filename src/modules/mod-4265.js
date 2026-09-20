'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4265",
  name: "Replace \"3\" with \"H\"",
  description: "Replaces every 3 with H.",
  run: (value) => String(value).split("3").join("H"),
});
