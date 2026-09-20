'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3272",
  name: "Replace \"N\" with \"q\"",
  description: "Replaces every N with q.",
  run: (value) => String(value).split("N").join("q"),
});
