'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1915",
  name: "Replace \"r\" with \"b\"",
  description: "Replaces every r with b.",
  run: (value) => String(value).split("r").join("b"),
});
