'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2098",
  name: "Replace \"u\" with \"b\"",
  description: "Replaces every u with b.",
  run: (value) => String(value).split("u").join("b"),
});
