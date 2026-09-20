'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2392",
  name: "Replace \"y\" with \"0\"",
  description: "Replaces every y with 0.",
  run: (value) => String(value).split("y").join("0"),
});
