'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4345",
  name: "Replace \"4\" with \"0\"",
  description: "Replaces every 4 with 0.",
  run: (value) => String(value).split("4").join("0"),
});
