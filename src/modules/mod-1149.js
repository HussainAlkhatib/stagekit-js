'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1149",
  name: "Replace \"e\" with \"T\"",
  description: "Replaces every e with T.",
  run: (value) => String(value).split("e").join("T"),
});
