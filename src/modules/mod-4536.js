'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4536",
  name: "Replace \"7\" with \"9\"",
  description: "Replaces every 7 with 9.",
  run: (value) => String(value).split("7").join("9"),
});
