'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0321",
  name: "Replace \"a\" with \"H\"",
  description: "Replaces every a with H.",
  run: (value) => String(value).split("a").join("H"),
});
