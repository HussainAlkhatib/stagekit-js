'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4522",
  name: "Replace \"7\" with \"U\"",
  description: "Replaces every 7 with U.",
  run: (value) => String(value).split("7").join("U"),
});
