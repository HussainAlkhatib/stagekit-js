'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1214",
  name: "Replace \"f\" with \"H\"",
  description: "Replaces every f with H.",
  run: (value) => String(value).split("f").join("H"),
});
