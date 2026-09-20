'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2159",
  name: "Replace \"v\" with \"b\"",
  description: "Replaces every v with b.",
  run: (value) => String(value).split("v").join("b"),
});
