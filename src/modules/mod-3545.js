'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3545",
  name: "Replace \"R\" with \"U\"",
  description: "Replaces every R with U.",
  run: (value) => String(value).split("R").join("U"),
});
