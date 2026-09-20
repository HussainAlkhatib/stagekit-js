'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4654",
  name: "Replace \"9\" with \"4\"",
  description: "Replaces every 9 with 4.",
  run: (value) => String(value).split("9").join("4"),
});
