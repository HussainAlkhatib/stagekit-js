'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3013",
  name: "Replace \"J\" with \"b\"",
  description: "Replaces every J with b.",
  run: (value) => String(value).split("J").join("b"),
});
