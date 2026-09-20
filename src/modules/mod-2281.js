'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2281",
  name: "Replace \"x\" with \"b\"",
  description: "Replaces every x with b.",
  run: (value) => String(value).split("x").join("b"),
});
