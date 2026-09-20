'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3912",
  name: "Replace \"X\" with \"U\"",
  description: "Replaces every X with U.",
  run: (value) => String(value).split("X").join("U"),
});
