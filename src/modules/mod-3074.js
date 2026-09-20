'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3074",
  name: "Replace \"K\" with \"b\"",
  description: "Replaces every K with b.",
  run: (value) => String(value).split("K").join("b"),
});
