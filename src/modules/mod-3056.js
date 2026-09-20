'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3056",
  name: "Replace \"J\" with \"T\"",
  description: "Replaces every J with T.",
  run: (value) => String(value).split("J").join("T"),
});
