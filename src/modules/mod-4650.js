'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4650",
  name: "Replace \"9\" with \"0\"",
  description: "Replaces every 9 with 0.",
  run: (value) => String(value).split("9").join("0"),
});
