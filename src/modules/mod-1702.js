'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1702",
  name: "Replace \"n\" with \"H\"",
  description: "Replaces every n with H.",
  run: (value) => String(value).split("n").join("H"),
});
