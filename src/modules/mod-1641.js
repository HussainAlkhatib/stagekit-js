'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1641",
  name: "Replace \"m\" with \"H\"",
  description: "Replaces every m with H.",
  run: (value) => String(value).split("m").join("H"),
});
