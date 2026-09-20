'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3301",
  name: "Replace \"N\" with \"U\"",
  description: "Replaces every N with U.",
  run: (value) => String(value).split("N").join("U"),
});
