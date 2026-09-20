'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2708",
  name: "Replace \"E\" with \"b\"",
  description: "Replaces every E with b.",
  run: (value) => String(value).split("E").join("b"),
});
