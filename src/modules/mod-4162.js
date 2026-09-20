'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4162",
  name: "Replace \"1\" with \"0\"",
  description: "Replaces every 1 with 0.",
  run: (value) => String(value).split("1").join("0"),
});
