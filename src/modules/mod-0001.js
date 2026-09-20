'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0001",
  name: "Replace \"a\" with \"b\"",
  description: "Replaces every a with b.",
  run: (value) => String(value).split("a").join("b"),
});
