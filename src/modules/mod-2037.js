'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2037",
  name: "Replace \"t\" with \"b\"",
  description: "Replaces every t with b.",
  run: (value) => String(value).split("t").join("b"),
});
