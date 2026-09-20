'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4641",
  name: "Replace \"9\" with \"R\"",
  description: "Replaces every 9 with R.",
  run: (value) => String(value).split("9").join("R"),
});
