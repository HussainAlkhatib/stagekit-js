'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2952",
  name: "Replace \"I\" with \"b\"",
  description: "Replaces every I with b.",
  run: (value) => String(value).split("I").join("b"),
});
