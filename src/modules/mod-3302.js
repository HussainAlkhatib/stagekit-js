'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3302",
  name: "Replace \"N\" with \"V\"",
  description: "Replaces every N with V.",
  run: (value) => String(value).split("N").join("V"),
});
