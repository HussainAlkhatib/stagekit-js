'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3262",
  name: "Replace \"N\" with \"g\"",
  description: "Replaces every N with g.",
  run: (value) => String(value).split("N").join("g"),
});
