'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3501",
  name: "Replace \"R\" with \"b\"",
  description: "Replaces every R with b.",
  run: (value) => String(value).split("R").join("b"),
});
