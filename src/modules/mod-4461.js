'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4461",
  name: "Replace \"6\" with \"U\"",
  description: "Replaces every 6 with U.",
  run: (value) => String(value).split("6").join("U"),
});
