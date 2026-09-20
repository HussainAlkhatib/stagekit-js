'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3562",
  name: "Replace \"S\" with \"b\"",
  description: "Replaces every S with b.",
  run: (value) => String(value).split("S").join("b"),
});
