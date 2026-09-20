'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3911",
  name: "Replace \"X\" with \"T\"",
  description: "Replaces every X with T.",
  run: (value) => String(value).split("X").join("T"),
});
